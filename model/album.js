"use strict"

var fs = require('fs');
const pool = require('../db/db');

class Album {
  getAlbums(albumId) {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM albums').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject("Error loading albums");
        client.release();
      })
    });
    })
  }

   getAlbumById(id) {
     var _this = this;
     return new Promise(function(resolve, reject) {
       if (typeof id == 'undefined') {
         reject(_this.returnError("Please supply an id"));
       }
       pool.connect().then(client => {
         client.query('SELECT * FROM artists WHERE id= $1::int', [id]).then(res => {
           resolve(res.rows[0]);
           client.release();
         })
         .catch(err => {
           reject(_this.returnError("Cannot find album by id " + id));
           client.release();
         })
       });
     })
   }

   getAlbumByTitle(title) {
     var _this = this;
     return new Promise(function(resolve, reject) {
       if (!title) {
         reject(_this.returnError("Please supply a name"));
       }
       pool.connect.then(client => {
         client.query("SELECT * FROM albums WHERE LOWER(name) LIKE LOWER($1::text)", ['%'+name+'%']).then(res => {
           resolve(res.rows[0]);
           client.release();
         })
         .catch(e => {
           reject(_this.returnError("Cannot find album by name " + name));
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
