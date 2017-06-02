var util = require('util');
var express = require('express');
var app = express();
var logger = require('morgan');
var errors = require('./lib/errors');

// load models and load data
var artistModel = require('./model/artist');
var playlistModel = require('./model/playlist');

var Album = require('./model/album');
var Song = require('./model/song');

//logging middleware
app.use(logger('dev'));

// set view engine
app.set('view engine', 'ejs');

// setup static files
app.use(express.static('public'));

// define routes
var about = require('./routes/about');
app.use('/about', about);

var artist = require('./routes/api/artist')(artistModel);
app.use('/api/artist', artist);

var playlist = require('./routes/api/playlist')(playlistModel);
app.use('/api/playlist', playlist);

app.use(function(req, res) {
  res.status(404).send(errors.toJson("404 Not Found"));
})

//error-handling middleware
app.use(function(req, res) {
  // undefined - console.error(err.stack);
  res.status(500 || err.status).send(errors.toJson("Oops, something went wrong :-("))
})

app.listen('8080');
console.log('8080 is listen port');
