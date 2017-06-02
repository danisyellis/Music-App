var util = require('util');
var express = require('express');
var app = express();
var logger = require('morgan');
var errors = require('./lib/errors');

// load models and load data
var Artist = require('./model/artist');
var Playlist = require('./model/playlist');
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

var artist_api = require('./routes/api/artist')(Artist);
app.use('/api/artist', artist_api);

var albums_api = require('./routes/api/albums')(Album);
app.use('/api/albums', albums_api);

var albumsById_api = require('./routes/api/albumById')(Album);
app.use('/api/album', albumsById_api);

var albumByTitle_api = require('./routes/api/albumByTitle.js')(Album);
app.use('/api/album', albumByTitle_api);

var playlist = require('./routes/api/playlist')(Playlist);
app.use('/api/playlist', playlist);

app.use(function(req, res) {
  res.status(404).send(errors.toJson("404 Not Found"));
})

//error-handling middleware
app.use(function(req, res) {
  // undefined - console.error(err.stack);
  res.status(500 || err.status).send(errors.toJson("Oops, something went wrong :-("))
})

//error-handling middleware
app.use(function(req, res) {
  res.status(404).send(errors.toJson("404 Not Found"));
})

app.listen('8080');
console.log('8080 is listen port');
