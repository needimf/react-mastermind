let Score = require('./../../models/score');

function index(req, res) {
  Score.topScores((err, scores) => {
    res.status(200).json(scores);
  });
}

function create(req, res) {
  Score.create(req.body, (err, score) => {
    res.status(201).json(score);
  });
}

module.exports = {
  index,
  create
}