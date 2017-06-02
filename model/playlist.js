"use strict"

const fs = require('fs');
const pool = require('../db/db');
const formatErrors = require('../lib/errors');

class Playlist  {

  // get all playlists
  getPlaylists() {
    var formatErrors = this;
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('SELECT * FROM playlists').then(res => {
        resolve(res.rows);
        client.release();
      })
      .catch(e => {
        reject(formatErrors.toJson("getPlaylists - Error loading playlists"));
        client.release();
      })
    });
    })
  }

  // get playlist by id
  getPlaylistById(id) {
    return new Promise(function(resolve, reject) {
      if (typeof id == 'undefined') {
        reject(formatErrors.toJson("Please supply an id"));
      }
      pool.connect().then(client => {
        client.query('SELECT * FROM playlists WHERE id = $1::int', [id]).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find playlist by id " + id));
          client.release();
        })
      });
    })
  }

  // add playlists
  addPlaylist(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('INSERT INTO playlists (name) VALUES ($1::text)', [params.name]).then(res => {
          client.query('SELECT * FROM playlists ORDER BY id DESC').then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot add playlist " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot add playlist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // add song to playlist
  getSongsFromPlaylist(params) {
    return new Promise(function(resolve, reject) {
      console.log("getSongsFromPlaylist", params)
      pool.connect().then(client => {
        client.query('SELECT songs.* FROM songs JOIN playlist_songs ON playlist_songs.song_id = songs.id WHERE (playlist_songs.playlist_id) = ($1::int)', [params.id]).then(res => {
            resolve(res.rows)
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot get songs from playlist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // add song to playlist
  addSongToPlaylist(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('INSERT INTO playlist_songs (song_id, playlist_id) VALUES ($1::int, $2::int)', [params.song_id, params.playlist_id]).then(res => {
          client.query('SELECT * FROM playlist_songs WHERE (song_id, playlist_id) = ($1::int, $2::int)', [params.song_id, params.playlist_id]).then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot add song to playlist " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot add song to playlist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // edit playlist
  editPlaylist(params) {
    return new Promise(function(resolve, reject) {
      console.log(params)
      pool.connect().then(client => {
        client.query('UPDATE playlists SET (name) = ($1::text) WHERE id = $2::int', [params.name, params.id]).then(res => {
          client.query('SELECT * FROM playlists WHERE id = $1', [params.id]).then(res => {
            resolve(res.rows[0])
          }).catch(e => {
            reject(formatErrors.toJson("Cannot edit playlist " + JSON.stringify(e)));
            client.release();
          });
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot edit playlist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // delete playlist
  deletePlaylist(params) {
    return new Promise(function(resolve, reject) {
      pool.connect().then(client => {
        client.query('DELETE FROM playlists WHERE id = $1::int', [params.id]).then(res => {
          if (res.rowCount) {
            resolve({'result' : 'success'});
          } else {
            reject(formatErrors.toJson("Cannot find playlist id " + params.id));
          }
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot delete playlist " + JSON.stringify(e)));
          client.release();
        })
      });
    })
  }

  // get playlist by name
  getPlaylistByName(name) {
    return new Promise(function(resolve, reject) {
      if (!name) {
        reject(formatErrors.toJson("Please supply a name"));
      }

      pool.connect().then(client => {
        client.query("SELECT * FROM playlists WHERE LOWER(name) LIKE LOWER($1::text)", ['%'+name+'%']).then(res => {
          resolve(res.rows[0]);
          client.release();
        })
        .catch(e => {
          reject(formatErrors.toJson("Cannot find playlist by name " + name));
          client.release();
        })
      });
    })
  }

}

module.exports = Playlist;
