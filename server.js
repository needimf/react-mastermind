let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));

// Configuring serve-favicon and static middlewares
// to serve from production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API routes before "catch all" route

// This "catch all" route is necessary for when users
// attempt to access the website from a link or path in
// the address bar
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});