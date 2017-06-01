var express = require('express');
var app = express();
var logger = require('morgan');

// load models and load data
var artist = require('./model/artist');

var Album = require('./model/album');
var album = new Album();
album.loadAll();


var Song = require('./model/song');
var song = new Song();
song.loadAll();

//logging middleware
app.use(logger('dev'));
// set view engine
app.set('view engine', 'ejs');
// setup static files
app.use(express.static('public'))

// define routes
var about = require('./routes/about');
app.use('/about', about);


var artists_api = require('./routes/api/artists')(artist);
app.use('/api/artists', artists_api);

var artistById_api = require('./routes/api/artistById')(artist);
app.use('/api/artist', artistById_api);

var artistByName_api = require('./routes/api/artistByName')(artist);
app.use('/api/artist', artistByName_api);

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
