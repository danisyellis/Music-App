# Music-App
Init #3: Hello, Web Servers

#Local Installation Instructions

1. Run command git clone https://github.com/eastnorthwest/Music-App
2. Change into the directory "Music-App"
3. Run command npm install
4. Run these commands in order: "npm run db:create", "npm run db:setup", "npm run db:seed"
5. Run command npm start

#Heroku Installation Instructions

1. Install Heroku CLI and login to Heroku if necessary <https://devcenter.heroku.com/articles/heroku-cli>
1. Run command git clone https://github.com/eastnorthwest/Music-App
2. Change into the directory "Music-App"
3. Run command heroku create
4. Run command heroku buildpacks:set heroku/nodejs
4. Run command heroku addons:create heroku-postgresql 
5. Run command heroku pg:psql < ./db/schema.sql
6. Run command heroku pg:psql < ./db/data.sql
7. Run command git push heroku master

#Accessing the API

Get all artists

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist/all>

Get an artist by id. 

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist/1> 

Get an artist by name. NAME = name.

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist/name/Santogold>

Add new artist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist> POST
<pre><code>
{
  name: "Artist Name",
  genre: "Genre",
  image: "http://www.theimageurl.com"
}
</code></pre>

Edit artist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist> PUT
<pre><code>
{
  id: 1,
  name: "Artist Name",
  genre: "Genre",
  image: "http://www.theimageurl.com"
}
</code></pre>

Delete artist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist> DELETE
<pre><code>
{
  id: 1
}
</code></pre>

Get all albums

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/albums/all>

Get an album by id. 

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/album/1> 

Add new album

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/album> POST
<pre><code>
{
  name: "Album Name",
  artist_id: 1,
  image: "http://www.theimageurl.com"
}
</code></pre>

Edit album

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/album> PUT
<pre><code>
{
  id: 1,
  name: "Album Name",
  image: "http://www.theimageurl.com"
}
</code></pre>

Delete album

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/artist> DELETE
<pre><code>
{
  id: 1
}
</code></pre>

Get all songs

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song/all>

Get all songs in an album

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song/album/ALBUMNAME>

Get all songs by an artist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/songs/artist/ARTISTNAME>

Get an song by id. 

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song/1> 

Add new song

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song> POST
<pre><code>
{
  name: "Song Name",
  album_id: 1
}
</code></pre>

Edit song

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song> PUT
<pre><code>
{
  id: 1,
  name: "Song Name"
}
</code></pre>

Delete song

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song> DELETE
<pre><code>
{
  id: 1
}
</code></pre>

Get all playlists

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist/all>

Get all songs in a playlist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist/songs/2>

Add a song to a playlist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist/song> POST
<pre><code>
{
  playlist_id: 1,
  album_id: 1
}
</code></pre>

Get an playlist by id. 

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist/1> 

Add new playlist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist> POST
<pre><code>
{
  name: "Playlist Name",
  album_id: 1
}
</code></pre>

Edit playlist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/playlist> PUT
<pre><code>
{
  id: 1,
  name: "Playlist Name"
}
</code></pre>

Delete playlist

<https://lg-filthy-flamingo-music-app.herokuapp.com/api/song> DELETE
<pre><code>
{
  id: 1
}
</code></pre>
