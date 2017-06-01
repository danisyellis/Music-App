var express = require('express'), router = express.Router(), errors = require('../../lib/errors');

module.exports = function (artist) {
  var a = new artist();

  router.get('/', function(req, res) {
    a.getArtists().then(function(data) {
      console.log("getArtists", data)
      res.json(data)
    }).catch(function(err){
      res.send(errors.toJson(err));
      console.log("getArtists error", err);
    })

  });
  return router;
};
