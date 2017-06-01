"use strict"

var fs =require('fs');

class Song {

  constructor() {
    this.constructor.songs = [];
    this.constructor.loaded = false;
  }

  get isLoaded(){
    return this.constructor.loaded;
  }

  getSongs(albumId) {
    var songList = [];
    this.constructor.songs.map(function(song) {
      if (song.album_id == albumId || typeof albumId == 'undefined')
      {
        songList.push(song);
      }
    })
    return songList;
  }

  getSong(id) {
    if (!id) {return false;}
    return this.songs[(id-1)];
  }

  getSongCount(albumId)
  {
    var count = 0;
    this.constructor.songs.map(function(song) {
      if (song.album_id == albumId)
      {
        count++;
      }
    })
    return count;
  }

  saveSongs(songs) {
    try {
      this.constructor.songs = JSON.parse(songs);
    } catch (e) {
      this.constructor.songs = [];
    }
    this.constructor.loaded = true;
  }

  loadAll() {
    var _this = this;
    fs.readFile('db/songs.json', 'utf8', function (err, songs){
      if (err) {
        return console.log(err);
      }
      _this.saveSongs(songs);
    })
  };
}

module.exports = Song;
