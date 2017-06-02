var util = require('util');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var expressValidator = require('express-validator');
var router = express.Router();
var logger = require('morgan');

// load models and load data
var artistModel = require('./model/artist');
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
