"use strict"

var fs = require('fs');

const pool = require('../db/db');

class Artist  {
  /* constructor is optional
  constructor() {}
  */

  getArtists() {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM artists').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject("Error loading artists");
        client.release();
      })
    });
    })
  }

  getArtist(id) {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM artists WHERE id = $1', [id]).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject("Error loading artist " + id);
          client.release();
        })
      });
    })
  }
}

module.exports = Artist;
