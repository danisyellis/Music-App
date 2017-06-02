var express= require('express');
var router = express.Router();
var errors = require('../../lib/errors')

module.exports = function(Album) {
  var albumMethods = new Album();

  router.get('/', function(req, res) {
    albumMethods.getAlbums().then(function(data) {
      res.json(data)
    }).catch(function(err) {
      res.send(errors.toJson(err));
      console.log("getAlbums error", err);
    })
  });
  return router;
};
