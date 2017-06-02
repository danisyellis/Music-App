var express = require('express');
var app = express();
var logger = require('morgan');

// load models and load data
var Artists = require('./model/artist');

var Albums = require('./model/album');

var Songs = require('./model/song');
var song = new Songs();

//logging middleware
app.use(logger('dev'));
// set view engine
app.set('view engine', 'ejs');
// setup static files
app.use(express.static('public'))

// define routes
var about = require('./routes/about');
app.use('/about', about);


var artists_api = require('./routes/api/artists')(Artists);
app.use('/api/artists', artists_api);

var artistById_api = require('./routes/api/artistById')(Artists);
app.use('/api/artist', artistById_api);

var artistByName_api = require('./routes/api/artistByName')(Artists);
app.use('/api/artist', artistByName_api);
var func = function() {return "hi"}

var albums_api = require('./routes/api/albums')(Albums);
app.use('/api/albums', albums_api);

var albumsById_api = require('./routes/api/albumById')(Albums);
app.use('/api/album', albumsById_api);

var albumByTitle_api = require('./routes/api/albumByTitle.js');
app.use('/api/album', albumByTitle_api);

//error-handling middleware
app.use(function(req, res) {
  // undefined - console.error(err.stack);
  res.status(500 || err.status).send("Oops, something went wrong :-(")
})

app.use(function(req, res) {
  res.status(404).send("404 Not Found");
})

app.listen('8080');
console.log('8080 is listen port');
