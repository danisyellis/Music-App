var express = require('express');
var router = express.Router();
var formatErrors = require('../../lib/errors');
var expressValidator = require('express-validator');

module.exports = function (Album) {

  router.use(expressValidator({
    customValidators: {
      isPresent: function(value) {
        console.log('isPresent', (typeof value != 'undefined'))
        return (typeof value == 'undefined');
      }
    }
  }));

  const albumSchema = {
    'id': {
      isPresent: false,
      errorMessage: 'Please provide id for album'
    },
    'artist_id': {
      isPresent: false,
      errorMessage: 'Please provide id for artist'
    },
    'title': {
      notEmpty: true,
      optional: false,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Album title must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide album title'
    },
    'year': {
      isPresent: false,
      errorMessage: 'Please provide the year this album was released'
    },
    'image': {
      notEmpty: false,
      optional: true,
      isLength: {
        options: [{min: 2, max: 255}],
        errorMessage: 'Album image must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      }
    }
  };

  var idSchema = {
    notEmpty: true,
    optional: false,
    isInt: {
      errorMessage: 'Please provide valid album id' // Error message for the validator, takes precedent over parameter message
    },
    errorMessage: 'Please provide album id'
  }

  var editAlbumSchema = JSON.parse(JSON.stringify(albumSchema));
  editAlbumSchema.id = idSchema;

  var deleteAlbumSchema = {
    id : idSchema
  }

  var a = new Album();

  // delete album
  router.delete('/', function(req, res) {
    req.check(deleteAlbumSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.deleteAlbum(req.query).then(function(data) {
          console.log("deleteAlbum", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("deleteAlbum params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // edit album
  router.put('/', function(req, res) {
    req.check(editAlbumSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.editAlbum(req.query).then(function(data) {
          console.log("editAlbum", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("editAlbum params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // add album
  router.post('/', function(req, res) {
    console.log(albumSchema)
    req.check(albumSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
          a.addAlbum(req.query).then(function(data) {
          console.log("addAlbums", data)
          res.json(data)
        }).catch(function(err){
            res.json(err);
        })
      } else {
        console.log("addAlbums params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // get all albums
  router.get('/all', function(req, res) {
    a.getAlbums().then(function(data) {
      console.log("getAlbums", data)
      res.json(data)
    }).catch(function(err){
      res.json(err);
      console.log("getAlbums error", err);
    })
  });

  // get album by id
  router.get(['/:id'], function(req, res) {
    a.getAlbumById(req.params.id).then(function(data) {
      console.log("getAlbumById", data);
      if (!data) {
        res.json(formatErrors.toJson("getAlbumById - No album found with id " + req.params.id))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getAlbumById - error", err);
    });
  });

  // get album by name
  router.get('/title/:title', function(req, res) {
    a.getAlbumByTitle(req.params.title || null).then(function(data) {
      console.log("getAlbumByTitle", data);
      if (!data) {
        res.json(formatErrors.toJson("getAlbumByTitle - No album found with name " + req.params.name))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getAlbumByTitle - error", err);
    })
  });

  return router;
};
