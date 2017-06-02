var express = require('express');
var router = express.Router();
var formatErrors = require('../../lib/errors');
var expressValidator = require('express-validator');
var app = express();

app.use(expressValidator());

module.exports = function (artist) {

  const artistSchema = {
    'name': {
      notEmpty: true,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Artist name must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide artist name'
    },
    'genre': {
      notEmpty: true,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Artist genre must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide artist genre'
    },
    'image': {
      notEmpty: false,
      isLength: {
        options: [{min: 2, max: 255}],
        errorMessage: 'Artist image must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      }
    }
  };
  app.post('/', function(req, res) {

    req.check(artistSchema);
    req.getValidationResult().then(function(result) {
      res.send(formatErrors.toJson(result.array()));
    });

    a.addArtists(req.params).then(function(data) {
      console.log("addArtists", data)
      res.json(data)
    }).catch(function(err){
      res.send(formatErrors.toJson(err));
      console.log("addArtists error", err);
    })
  });

  var a = new artist();

  router.get('/all', function(req, res) {
    a.getArtists().then(function(data) {
      console.log("getArtists", data)
      res.json(data)
    }).catch(function(err){
      res.send(formatErrors.toJson(err));
      console.log("getArtists error", err);
    })
  });

  router.post('/', function(req, res) {
    console.log("Params", req.params)
    console.log("Check", req.check(artistSchema));
    if (!req.check(artistSchema)) {
      req.getValidationResult().then(function(result) {
        console.log("Errors", result)
        res.send(formatErrors.toJson(result.array()));
      });
      return;
    }
    a.addArtists(req.params).then(function(data) {
      console.log("addArtists", data)
      res.json(data)
    }).catch(function(err){
      res.send(formatErrors.toJson(err));
      console.log("addArtists error", err);
    })
  });

  router.get(['/:id', '/id/:id'], function(req, res) {
    a.getArtistById(req.params.id).then(function(data) {
      console.log("getArtistById", data);
      if (!data) {
        res.send(formatErrors.toJson("getArtistById - No artist found with id " + req.params.id))
      }
      res.json(data);
    }).catch(function(err){
      res.send(formatErrors.toJson(err));
      console.log("getArtistById - error", err);
    })
  });

  router.get('/name/:name', function(req, res) {
    a.getArtistByName(req.params.name || null).then(function(data) {
      console.log("getArtistByName", data);
      if (!data) {
        res.send(formatErrors.toJson("getArtistByName - No artist found with name " + req.params.name))
      }
      res.json(data);
    }).catch(function(err){
      res.send(formatErrors.toJson(err));
      console.log("getArtistByName - error", err);
    })
  });

  return router;
};
