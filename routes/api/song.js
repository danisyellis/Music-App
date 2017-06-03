var express = require('express');
var router = express.Router();
var formatErrors = require('../../lib/errors');
var expressValidator = require('express-validator');

module.exports = function (Song) {

  router.use(expressValidator({
    customValidators: {
      isPresent: function(value) {
        console.log('isPresent', (typeof value != 'undefined'))
        return (typeof value == 'undefined');
      }
    }
  }));

  const songSchema = {
    'id': {
      isPresent: false,
      errorMessage: 'Please provide id for song'
    },
    'title': {
      notEmpty: true,
      optional: false,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Song name must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide song name'
    },
    'album_id': {
      isPresent: false,
      errorMessage: 'Please provide id for album'
    },
    'length': {
      isPresent: false,
      errorMessage: 'Please provide length of song'
    },
    'track_no': {
      isPresent: false,
      errorMessage: 'Please provide track number of song'
    }
  };

  var idSchema = {
    notEmpty: true,
    optional: false,
    isInt: {
      errorMessage: 'Please provide valid song id' // Error message for the validator, takes precedent over parameter message
    },
    errorMessage: 'Please provide song id'
  }

  var editSongSchema = JSON.parse(JSON.stringify(songSchema));
  editSongSchema.id = idSchema;

  var deleteSongSchema = {
    id : idSchema
  }

  var a = new Song();

  // delete song
  router.delete('/', function(req, res) {
    req.check(deleteSongSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.deleteSong(req.query).then(function(data) {
          console.log("deleteSong", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("deleteSong params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // edit song
  router.put('/', function(req, res) {
    req.check(editSongSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        a.editSong(req.query).then(function(data) {
          console.log("editSong", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("editSong params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // add song
  router.post('/', function(req, res) {
    console.log(songSchema)
    req.check(songSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
          a.addSong(req.query).then(function(data) {
          console.log("addSongs", data)
          res.json(data)
        }).catch(function(err){
            res.json(err);
        })
      } else {
        console.log("addSongs params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // get all songs
  router.get('/all', function(req, res) {
    a.getSongs().then(function(data) {
      console.log("getSongs", data)
      res.json(data)
    }).catch(function(err){
      res.json(err);
      console.log("getSongs error", err);
    })
  });

  // get song by id
  router.get(['/:id'], function(req, res) {
    a.getSongById(req.params.id).then(function(data) {
      console.log("getSongById", data);
      if (!data) {
        res.json(formatErrors.toJson("getSongById - No song found with id " + req.params.id))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getSongById - error", err);
    });
  });

  // get all songs in an album
  router.get('/album/:albumName', function(req, res) {
    a.getSongsByAlbum(req.params.albumName || null).then(function(data) {
      console.log("getSongsByAlbum", data);
      if (!data) {
        res.json(formatErrors.toJson("getSongsByAlbum - No songs found in that album: " + req.params.albumName))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getSongsByAlbum - error", err);
    })
  });

  //get all songs by an artist
  router.get('/artist/:artistName', function(req, res) {
    a.getSongsByArtist(req.params.artistName || null).then(function(data) {
      console.log("getSongsByArtist", data);
      if (!data) {
        res.json(formatErrors.toJson("getSongsByArtist - No songs found from that artist name " + req.params.artistName))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getSongsByArtist - error", err);
    })
  });
  return router;
};
