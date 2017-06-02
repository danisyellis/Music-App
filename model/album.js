"use strict"

var fs = require('fs');
const pool = require('../db/db');
const formatErrors = require('../lib/errors');

class Album {
  getAlbums() {
    var formatErrors = this;
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM albums').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject(formatErrors.toJson("getAlbums - Error loading album"));
        client.release();
      })
    });
    })
  }

   getAlbumById(id) {
     return new Promise(function(resolve, reject) {
       if (typeof id == 'undefined') {
         reject(formatErrors.toJson("Please supply an id"));
       }
       pool.connect().then(client => {
         client.query('SELECT * FROM artists WHERE id= $1::int', [id]).then(res => {
           resolve(res.rows[0]);
           client.release();
         })
         .catch(err => {
           reject(formatErrors.toJson("Cannot find album by id " + id));
           client.release();
         })
       });
     })
   }

   getAlbumByTitle(title) {
     return new Promise(function(resolve, reject) {
       if (!title) {
         reject(formatErrors.toJson("Please supply a name"));
       }
       pool.connect().then(client => {
         client.query("SELECT * FROM albums WHERE LOWER(title) LIKE LOWER($1::text)", ['%'+title+'%']).then(res => {
           resolve(res.rows[0]);
           client.release();
         })
         .catch(e => {
           reject(formatErrors.toJson("Cannot find album by name " + name));
           client.release();
         })
       });
     })
   }
  // getAlbumCount(artistId)
  // {
  //   var count = 0;
  //   this.constructor.albums.map(function(album) {
  //     if (album.artist_id == artistId)
  //     {
  //       count++;
  //     }
  //   })
  //   return count;
  // }

}

module.exports = Album;
