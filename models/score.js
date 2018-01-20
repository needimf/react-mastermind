let mongoose = require('mongoose');

let scoreSchema = new mongoose.Schema({
  initials: {
    type: String,
    required: true,
    match: /[A-Za-z]{2,3}/
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

scoreSchema.statics.topScores = function(cb) {
  this.find({}).sort({numGuesses: 1, seconds: 1}).limit(20).exec((err, scores) => {
    cb(err,scores);
  });
};

module.exports = mongoose.model('Score', scoreSchema);