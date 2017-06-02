var express = require('express');
var router = express.Router();
var formatErrors = require('../../lib/errors');
var expressValidator = require('express-validator');

module.exports = function (playlist) {

  router.use(expressValidator({
    customValidators: {
      isPresent: function(value) {
        console.log('isPresent', (typeof value != 'undefined'))
        return (typeof value == 'undefined');
      }
    }
  }));

  const playlistSchema = {
    'id': {
      isPresent: false,
      errorMessage: 'Please do not provide id for playlist'
    },
    'name': {
      notEmpty: true,
      optional: false,
      isLength: {
        options: [{ min: 2, max: 255 }],
        errorMessage: 'Playlist name must be between 2 and 255 chars long' // Error message for the validator, takes precedent over parameter message
      },
      errorMessage: 'Please provide playlist name'
    }
  };

  var idSchema = {
    notEmpty: true,
    optional: false,
    isInt: {
      errorMessage: 'Please provide valid playlist id' // Error message for the validator, takes precedent over parameter message
    },
    errorMessage: 'Please provide playlist id'
  }

  var addSongSchema = {
    notEmpty: true,
    optional: false,
    isInt: {
      errorMessage: 'Please provide valid song_id for playlist' // Error message for the validator, takes precedent over parameter message
    },
    errorMessage: 'Please provide song_id for playlist'
  }

  var editPlaylistSchema = JSON.parse(JSON.stringify(playlistSchema));
  editPlaylistSchema.id = idSchema;

  var addSongToPlaylistSchema = {
    song_id: addSongSchema,
    playlist_id: idSchema
  }

  var getSongsFromPlaylistSchema = {
    id: idSchema
  }

  var deletePlaylistSchema = {
    id : idSchema
  }

  var p = new playlist();

  // delete playlist
  router.delete('/', function(req, res) {
    req.check(deletePlaylistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        p.deletePlaylist(req.query).then(function(data) {
          console.log("deletePlaylist", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("deletePlaylist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // edit playlist
  router.put('/', function(req, res) {
    req.check(editPlaylistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        p.editPlaylist(req.query).then(function(data) {
          console.log("editPlaylist", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("editPlaylist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // add playlist
  router.post('/', function(req, res) {
    console.log(playlistSchema)
    req.check(playlistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
          p.addPlaylist(req.query).then(function(data) {
          console.log("addPlaylists", data)
          res.json(data)
        }).catch(function(err){
            res.json(err);
        })
      } else {
        console.log("addPlaylists params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // get songs from playlist
  router.get('/songs/:id', function(req, res) {
    req.check(getSongsFromPlaylistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        p.getSongsFromPlaylist(req.params).then(function(data) {
          console.log("getSongsFromPlaylist", data);
          if (!data) {
            res.json(formatErrors.toJson("getSongsFromPlaylist - No playlists found with id " + req.params.id))
          }
          res.json(data);
        }).catch(function(err){
          res.json(err);
          console.log("getSongsFromPlaylist - error", err);
        })
      } else {
        console.log("get songs from playlist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // add song to playlist
  router.post('/song/', function(req, res) {
    console.log(addSongToPlaylistSchema)
    req.check(addSongToPlaylistSchema);
    req.getValidationResult().then(function(result) {
      if (result.useFirstErrorOnly().isEmpty()) {
        p.addSongToPlaylist(req.query).then(function(data) {
          console.log("add song to playlist", data)
          res.json(data)
        }).catch(function(err){
          res.json(err);
        })
      } else {
        console.log("add song to playlist params error");
        res.json(formatErrors.toJson(result.array()));
      }
    }).catch(function(err) {
      console.log("Err", err)
    });
  });

  // get all playlists
  router.get('/all', function(req, res) {
    p.getPlaylists().then(function(data) {
      console.log("getPlaylists", data)
      res.json(data)
    }).catch(function(err){
      res.json(err);
      console.log("getPlaylists error", err);
    })
  });

  // get playlist by id
  router.get(['/:id'], function(req, res) {
    p.getPlaylistById(req.params.id).then(function(data) {
      console.log("getPlaylistById", data);
      if (!data) {
        res.json(formatErrors.toJson("getPlaylistById - No playlist found with id " + req.params.id))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getPlaylistById - error", err);
    });
  });

  // get playlist by name
  router.get('/name/:name', function(req, res) {
    p.getPlaylistByName(req.params.name || null).then(function(data) {
      console.log("getPlaylistByName", data);
      if (!data) {
        res.json(formatErrors.toJson("getPlaylistByName - No playlist found with name " + req.params.name))
      }
      res.json(data);
    }).catch(function(err){
      res.json(err);
      console.log("getPlaylistByName - error", err);
    })
  });

  return router;
};
