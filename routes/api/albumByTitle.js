var express = require('express');
var router = express.Router();
var errors = require('../../lib/errors.js');

module.exports = function(Album) {
  var albumMethods = new Album();

  router.get('/name/:name', function(req, res) {
    albumMethods.getAlbumByTitle(req.params.title).then(function(data) {
      if (!data) {
        res.send(errors.toJson("getAlbumByName - No artist found with name " + req.params.name))
      }
      res.json(data)
    }).catch(function(err){
      res.send(errors.toJson(err));
      console.log("getAlbumByName - error", err);
    })
  });
  return router;
}
