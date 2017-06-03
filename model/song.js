"use strict"

const fs = require('fs');
const pool = require('../db/db');
const formatErrors = require('../lib/errors');

class Song  {

  // get all songs
  getSongs() {
    var formatErrors = this;
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM songs').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject(formatErrors.toJson("getSongs - Error loading songs"));
        client.release();
      })
    });
    })
  }

  // get song by id
  getSongById(id) {
    return new Promise(function(resolve, reject) {
      if (typeof id == 'undefined') {
        reject(formatErrors.toJson("Please supply an id"));
      }
      pool.connect().then(client => {
        client.query('SELECT * FROM songs WHERE id = $1::int', [id]).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find song by id " + id));
          client.release();
        })
      });
    })
  }

  // add songs
  addSong(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('INSERT INTO songs (name, genre, image) VALUES ($1::text,$2::text,$3::text)', [params.name, params.genre, ('' || params.image)]).then(res => {
          client.query('SELECT * FROM songs ORDER BY id DESC').then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot add song " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot add song " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // edit song
  editSong(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('UPDATE songs SET (name, genre, image) = ($1::text,$2::text,$3::text) WHERE id = $4::int', [params.name, params.genre, ('' || params.image), params.id]).then(res => {
          client.query('SELECT * FROM songs WHERE id = $1', [params.id]).then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot edit song " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot edit song " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // delete song
  deleteSong(params) {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('DELETE FROM songs WHERE id = $1::int', [params.id]).then(res => {
          if (res.rowCount) {
            resolve({'result' : 'success'});
          } else {
            reject(formatErrors.toJson("Cannot find song id " + params.id));
          }
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot delete song " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // get song by artist
  getSongsByArtist(artistName) {
    return new Promise(function(resolve, reject) {
      if (!artistName) {
        reject(formatErrors.toJson("Please supply an artist name"));
      }

      pool.connect().then(client => {
        client.query("SELECT * FROM songs WHERE LOWER(name) LIKE LOWER($1::text)", ['%'+name+'%']).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find song by artist name " + artistName));
          client.release();
        })
      });
    })
  }
  //get songs by album
  getSongsByAlbum(albumName) {
    return new Promise(function(resolve, reject) {
      if (!albumName) {
        reject(formatErrors.toJson("Please supply an album name"));
      }
      pool.connect().then(client => {
        //LOWER(name) name is the thing in the db    $1 says- the first thing in the array of variables, text is the type of variable, if it's an int instead of text, just put the number inside of the array, without all the concatenating stuff
        client.query("SELECT * FROM songs JOIN albums ON songs.album_id = albums.id JOIN artists on albums.artist_id = artists.id WHERE LOWER(name) LIKE LOWER($1::text)", ['%'+name+'%']).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find song by album name " + albumName));
          client.release();
        })
      });
    })
  }
}

module.exports = Song;
