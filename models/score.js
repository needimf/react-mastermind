let mongoose = require('mongoose');

let scoreSchema = new mongoose.Schema({
  initials: {
    type: String,
    required: true,
    match: /[A-Za-z]{2,3}/,
    uppercase: true
    },
  numGuesses: {
    type: Number,
    required: true
    },
  seconds: {
    type: Number,
    required: true
    },
  },
  {
    timestamps: true
  }
);

scoreSchema.pre('save', function(next) {
  this.constructor.find({}).sort({numGuesses: -1, seconds: -1}).limit(20).exec((err, topScores) => {
    if(err) {
      next(err);
    } else if (topScores.length < 20 || (this.numGuesses < topScores[0].numGuesses || (this.numGuesses === topScores[0].numGuesses && this.seconds < topScores[0].seconds))) {
      next();
    } else {
      next(new Error("Score must be a valid topscore. It must be a better score than the twentieth top score."));
    }
  });
});

scoreSchema.post('save', function() {
  this.constructor.find({}).sort({numGuesses: 1, seconds: 1}).exec((err, scores) => {
    if (err) {
      console.log("Post hook error: " + err);
    } else if (scores.length > 20) {
      this.constructor.findByIdAndRemove(scores[0]._id, (err, removedScore) => {
        console.log("Removed score: " + removedScore);
      });
    }
  });
});

scoreSchema.statics.topScores = function(cb) {
  this.find({}).sort({numGuesses: 1, seconds: 1}).limit(20).exec((err, scores) => {
    cb(err,scores);
  });
};

module.exports = mongoose.model('Score', scoreSchema);