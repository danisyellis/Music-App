var express = require("express");
var router = express.Router();
var errors = require('../../lib/errors');

module.exports = function(Album) {
  var albumMethods = new Album();

  router.get(['/:id'], function(req, res) {
    albumMethods.getAlbumById(req.params.id).then(function(data) {
    if (!data) {
      res.send(errors.toJson("getAlbum - no album found with that id" + req.params.id))
    }
    res.json(data);
    }).catch(function(err) {
    res.send(errors.toJson(err));
    console.log("getAlbum - error", err);
    })
  });
  return router
}
