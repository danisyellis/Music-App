var express = require('express');
var router = express.Router();
var formatErrors = require('../../lib/errors');
var expressValidator = require('express-validator');
var app = express();

module.exports = function (artist) {

  router.use(expressValidator({
    customValidators: {
      isPresent: function(value) {
        console.log('isPresent', (typeof value != 'undefined'))
        return (typeof value == 'undefined');
      }
    }
  }));

  const artistSchema = {
    'id': {
      isPresent: false,
      errorMessage: 'Please do not provide id for artist'
    },
    'name': {
      notEmpty: true,
      optional: false,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Artist name must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide artist name'
    },
    'genre': {
      notEmpty: true,
      optional: false,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Artist genre must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide artist genre'
    },
    'image': {
      notEmpty: false,
      optional: true,
      isLength: {
        options: [{min: 2, max: 255}],
        errorMessage: 'Artist image must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      }
    }
  };

  var idSchema = {
    notEmpty: true,
    optional: false,
    isInt: {
      errorMessage: 'Please provide valid artist id' // Error message for the validator, takes precedent over parameter message
    },
    errorMessage: 'Please provide artist id'
  }

  var editArtistSchema = JSON.parse(JSON.stringify(artistSchema));
  editArtistSchema.id = idSchema;

  var deleteArtistSchema = {
    id : idSchema
  }

  var a = new artist();

  // delete artist
  router.delete('/', function(req, res) {
    req.check(deleteArtistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.deleteArtist(req.query).then(function(data) {
          console.log("deleteArtist", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("deleteArtist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // edit artist
  router.put('/', function(req, res) {
    req.check(editArtistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.editArtist(req.query).then(function(data) {
          console.log("editArtist", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("editArtist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // add artist
  router.post('/', function(req, res) {
    console.log(artistSchema)
    req.check(artistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
          a.addArtist(req.query).then(function(data) {
          console.log("addArtists", data)
          res.json(data)
        }).catch(function(err){
            res.json(err);
        })
      } else {
        console.log("addArtists params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // get all artists
  router.get('/all', function(req, res) {
    a.getArtists().then(function(data) {
      console.log("getArtists", data)
      res.json(data)
    }).catch(function(err){
      res.json(err);
      console.log("getArtists error", err);
    })
  });

  // get artist by id
  router.get(['/:id'], function(req, res) {
    a.getArtistById(req.params.id).then(function(data) {
      console.log("getArtistById", data);
      if (!data) {
        res.json(formatErrors.toJson("getArtistById - No artist found with id " + req.params.id))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getArtistById - error", err);
    });
  });

  // get artist by name
  router.get('/name/:name', function(req, res) {
    a.getArtistByName(req.params.name || null).then(function(data) {
      console.log("getArtistByName", data);
      if (!data) {
        res.json(formatErrors.toJson("getArtistByName - No artist found with name " + req.params.name))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getArtistByName - error", err);
    })
  });

  return router;
};
