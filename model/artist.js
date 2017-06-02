"use strict"

const fs = require('fs');
const pool = require('../db/db');
const formatErrors = require('../lib/errors');

class Artist  {

  // get all artists
  getArtists() {
    var formatErrors = this;
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM artists').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject(formatErrors.toJson("getArtists - Error loading artists"));
        client.release();
      })
    });
    })
  }

  // get artist by id
  getArtistById(id) {
    return new Promise(function(resolve, reject) {
      if (typeof id == 'undefined') {
        reject(formatErrors.toJson("Please supply an id"));
      }
      pool.connect().then(client => {
        client.query('SELECT * FROM artists WHERE id = $1::int', [id]).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find artist by id " + id));
          client.release();
        })
      });
    })
  }

  // add artists
  addArtist(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('INSERT INTO artists (name, genre, image) VALUES ($1::text,$2::text,$3::text)', [params.name, params.genre, ('' || params.image)]).then(res => {
          client.query('SELECT * FROM artists ORDER BY id DESC').then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot add artist " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot add artist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // edit artist
  editArtist(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('UPDATE artists SET (name, genre, image) = ($1::text,$2::text,$3::text) WHERE id = $4::int', [params.name, params.genre, ('' || params.image), params.id]).then(res => {
          client.query('SELECT * FROM artists WHERE id = $1', [params.id]).then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot edit artist " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot edit artist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // delete artist
  deleteArtist(params) {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('DELETE FROM artists WHERE id = $1::int', [params.id]).then(res => {
          if (res.rowCount) {
            resolve({'result' : 'success'});
          } else {
            reject(formatErrors.toJson("Cannot find artist id " + params.id));
          }
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot delete artist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // get artist by name
  getArtistByName(name) {
    return new Promise(function(resolve, reject) {
      if (!name) {
        reject(formatErrors.toJson("Please supply a name"));
      }

      pool.connect().then(client => {
        client.query("SELECT * FROM artists WHERE LOWER(name) LIKE LOWER($1::text)", ['%'+name+'%']).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find artist by name " + name));
          client.release();
        })
      });
    })
  }

}

module.exports = Artist;
