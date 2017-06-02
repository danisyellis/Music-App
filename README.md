# Music-App
Init #3: Hello, Web Servers

#Installation Instructions

1. Make a new directory
2. Change into the directory "Music-App"
3. Run command npm-install --save
4. Run command node server

#Accessing the API

Get all artists

<http://localhost:8080/api/artists>

Get an artist by id. 

<http://localhost:8080/api/artist/1> 

Get an artist by name. NAME = name.

<http://localhost:8080/api/artist/name/Santogold>

Add new artist

<http://localhost:8080/api/artist> POST
<pre><code>
{
  name: "Artist Name",
  genre: "Genre",
  image: "http://www.theimageurl.com"
}
</code></pre>

Edit artist

<http://localhost:8080/api/artist> PUT
<pre><code>
{
  id: 1,
  name: "Artist Name",
  genre: "Genre",
  image: "http://www.theimageurl.com"
}
</code></pre>

Delete artist

<http://localhost:8080/api/artist> DELETE
<pre><code>
{
  id: 1
}
</code></pre>


  

