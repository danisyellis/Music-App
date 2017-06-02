"use strict"

const fs = require('fs');
const pool = require('../db/db');
const formatErrors = require('../lib/errors');

class Artist  {

  // get all artists
  getArtists() {
    var _this = this;
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
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof id == 'undefined') {
        reject(_this.toJson("Please supply an id"));
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
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof id == 'undefined') {
        reject(_this.toJson("Please supply an id"));
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

  // get artist by name
  getArtistByName(name) {
    var _this = this;
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
