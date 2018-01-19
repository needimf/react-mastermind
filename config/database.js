let mongoose = require('mongoose');
mongoose.promise = global.Promise;
let url = process.env.DATABASE_URL || 'mongodb://localhost:27017/react-mastermind';

mongoose.connect(url);

mongoose.connection.once('open', () => {
  console.log(`Mongoose connected to: ${url}`);
});

module.exports = mongoose;