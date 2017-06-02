var express = require('express'), router = express.Router(), errors = require('../../lib/errors');

module.exports = function (Artist) {
  var a = new Artist();

  router.get('/name/:name', function(req, res) {
    a.getArtistByName(req.params.name || null).then(function(data) {
      console.log("getArtistByName", data);
      if (!data) {
        res.send(errors.toJson("getArtistByName - No artist found with name " + req.params.name))
      }
      res.json(data);
    }).catch(function(err){
      res.send(errors.toJson(err));
      console.log("getArtistByName - error", err);
    })
  });

  return router;
};
