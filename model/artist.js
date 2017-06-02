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
        client.query('INSERT INTO artists (name, genre, image) VALUES ($1::text,$2::text,$3::text)', [params.name, params.genre, "1234"]).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot add artist " + JSON.stringify(e)));
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
