
/* INSERT QUERY NO: 1 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'D''Angelo', 'Neo-Soul', 'http://i368.photobucket.com/albums/oo126/theybf/DECEMBER%202011/a819ca23.jpg'
  );

/* INSERT QUERY NO: 2 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'Horse Feathers', 'Folk', 'http://cdn.baeblemusic.com/images/miscvideos/horse_feathers/horse_feathers_1-332.jpg'
  );

/* INSERT QUERY NO: 3 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'Lauryn Hill', 'Hip Hop', 'http://sites.psu.edu/ccrutchfieldpassionblog/wp-content/uploads/sites/16623/2014/09/lauryn_hill_2.jpg'
  );

/* INSERT QUERY NO: 4 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'M.I.A.', 'Hip Hop', 'http://saintheron.com/wp-content/uploads/2016/04/photo_mia_300rgb-1-_danielsannwald_wide-b955b978d57da9c87a76ab14bc183a7a1863cd0b.jpg'
  );

/* INSERT QUERY NO: 5 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'Radiohead', 'Electronic Rock', 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2015/09/2014Radiohead_Getty76188172250214-1.jpg'
  );

/* INSERT QUERY NO: 6 */pwd
INSERT INTO artists(name, genre, image)
VALUES
  (
    'Santogold', 'Alternative Hip Hop', 'http://www.idolator.com/wp-content/uploads/sites/10/2016/02/santigold-2015-promo-620x413.jpg'
  );

/* INSERT QUERY NO: 7 */
INSERT INTO artists(name, genre, image)
VALUES
  (
    'TV On The Radio', 'Rock', 'http://static.spin.com/files/141117-tv-on-the-radio-seeds.ong_.jpeg'
  );


/* INSERT QUERY NO: 1 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    1, 'Voodoo', 2000, 'http://cps-static.rovicorp.com/3/JPG_500/MI0002/514/MI0002514405.jpg?partner=allrovi.com'
  );

/* INSERT QUERY NO: 2 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'D''Angelo'), 'Brown Sugar', 1995, 'http://www.playthishiphop.com/wp-content/uploads/2013/06/DAngelo-Brown-Sugar.jpg?x34382'
  );

/* INSERT QUERY NO: 3 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'Horse Feathers'), 'House with No Home', 2008, 'https://images-na.ssl-images-amazon.com/images/I/71yq0dNCxaL._SY355_.jpg'
  );

/* INSERT QUERY NO: 4 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'Lauryn Hill'), 'The Miseducation Of Lauryn Hill', 1998, 'http://68.media.tumblr.com/70b3aa55be3c077652fc6d92a46a47b5/tumblr_ntnd2auaPd1qexnlbo1_500.jpg'
  );

/* INSERT QUERY NO: 5 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'M.I.A.'), 'Kala', 2007, 'https://upload.wikimedia.org/wikipedia/en/c/cf/M.I.A._-_Kala.png'
  );

/* INSERT QUERY NO: 6 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'Radiohead'), 'In Rainbows', 2007, 'https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg'
  );

/* INSERT QUERY NO: 7 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'Radiohead'), 'Amnesiac', 2001, 'https://upload.wikimedia.org/wikipedia/en/c/c5/Radiohead.amnesiac.albumart.jpg'
  );

/* INSERT QUERY NO: 8 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'Santogold'), 'Santogold', 2008, 'http://albumart.besteveralbums.com/albumart/album_large_4200_4e53b6344d2e8.jpg'
  );

/* INSERT QUERY NO: 9 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'TV On The Radio'), 'Dear Science', 2008, 'https://images-na.ssl-images-amazon.com/images/I/71rTOL893PL._SX355_.jpg'
  );

/* INSERT QUERY NO: 10 */
INSERT INTO albums(artist_id, title, year, image)
VALUES
  (
    (SELECT id FROM artists WHERE name = 'TV On The Radio'), 'Desperate Youth', 2004, ''
  );


/* INSERT QUERY NO: 1 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Playa Playa', 1, 426, 1
  );

/* INSERT QUERY NO: 2 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Devil''s Pie', 1, 321, 2
  );

/* INSERT QUERY NO: 3 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Left & Right (Featuring Method Man And Redman)', 1, 286, 3
  );

/* INSERT QUERY NO: 4 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'The Line', 1, 316, 4
  );

/* INSERT QUERY NO: 5 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Send It On', 1, 356, 5
  );

/* INSERT QUERY NO: 6 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Chicken Grease', 1, 278, 6
  );

/* INSERT QUERY NO: 7 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'One Mo''gin', 1, 373, 7
  );

/* INSERT QUERY NO: 8 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'The Root', 1, 393, 8
  );

/* INSERT QUERY NO: 9 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Spanish Joint', 1, 344, 9
  );

/* INSERT QUERY NO: 10 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Feel Like Makin'' Love', 1, 382, 10
  );

/* INSERT QUERY NO: 11 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Greatdayndamorn ''Booty', 1, 455, 11
  );

/* INSERT QUERY NO: 12 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Untitled (How Does It Feel)', 1, 430, 12
  );

/* INSERT QUERY NO: 13 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Brown Sugar', 2, 263, 1
  );

/* INSERT QUERY NO: 14 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Alright', 2, 313, 2
  );

/* INSERT QUERY NO: 15 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Jonz In My Bonz', 2, 356, 3
  );

/* INSERT QUERY NO: 16 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Me And Those Dreamin'' Eyes Of Mine', 2, 286, 4
  );

/* INSERT QUERY NO: 17 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'"Shit', 0, 0, 2
  );

/* INSERT QUERY NO: 18 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Smooth', 2, 259, 6
  );

/* INSERT QUERY NO: 19 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Cruisin''', 2, 384, 7
  );

/* INSERT QUERY NO: 20 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'When We Get By', 2, 344, 8
  );

/* INSERT QUERY NO: 21 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Lady', 2, 346, 9
  );

/* INSERT QUERY NO: 22 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Higher', 2, 327, 10
  );

/* INSERT QUERY NO: 23 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Curs in the Weeds', 3, 210, 1
  );

/* INSERT QUERY NO: 24 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Rude to Rile', 3, 209, 2
  );

/* INSERT QUERY NO: 25 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Working Poor', 3, 196, 3
  );

/* INSERT QUERY NO: 26 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Albina', 3, 137, 4
  );

/* INSERT QUERY NO: 27 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'A Burden', 3, 211, 5
  );

/* INSERT QUERY NO: 28 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Helen', 3, 260, 6
  );

/* INSERT QUERY NO: 29 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Father (Reprise)', 3, 121, 7
  );

/* INSERT QUERY NO: 30 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Heathen''s Kiss', 3, 280, 8
  );

/* INSERT QUERY NO: 31 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Different Gray', 3, 176, 9
  );

/* INSERT QUERY NO: 32 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'This Is What', 3, 189, 10
  );

/* INSERT QUERY NO: 33 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Father', 3, 210, 11
  );

/* INSERT QUERY NO: 34 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Intro', 4, 47, 1
  );

/* INSERT QUERY NO: 35 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Lost Ones', 4, 333, 2
  );

/* INSERT QUERY NO: 36 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Ex Factor', 4, 326, 3
  );

/* INSERT QUERY NO: 37 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'To Zion', 4, 369, 4
  );

/* INSERT QUERY NO: 38 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Doo Wop (That Thing)', 4, 320, 5
  );

/* INSERT QUERY NO: 39 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Superstar', 4, 297, 6
  );

/* INSERT QUERY NO: 40 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Final Hour', 4, 256, 7
  );

/* INSERT QUERY NO: 41 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'When It Hurts So Bad', 4, 342, 8
  );

/* INSERT QUERY NO: 42 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'I Used To Love Him', 4, 339, 9
  );

/* INSERT QUERY NO: 43 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Forgive Them Father', 4, 315, 10
  );

/* INSERT QUERY NO: 44 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Every Ghetto Every City', 4, 314, 11
  );

/* INSERT QUERY NO: 45 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Nothing Even Matters', 4, 350, 12
  );

/* INSERT QUERY NO: 46 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Everything Is Everything', 4, 293, 13
  );

/* INSERT QUERY NO: 47 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Miseducation Of Lauryn Hill', 4, 257, 14
  );

/* INSERT QUERY NO: 48 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Can''t Take My Eyes Off Of You', 4, 221, 15
  );

/* INSERT QUERY NO: 49 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Tell Him', 4, 280, 16
  );

/* INSERT QUERY NO: 50 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Bamboo Banger', 5, 298, 1
  );

/* INSERT QUERY NO: 51 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Bird Flu', 5, 204, 2
  );

/* INSERT QUERY NO: 52 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Boyz', 5, 207, 3
  );

/* INSERT QUERY NO: 53 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Jimmy', 5, 209, 4
  );

/* INSERT QUERY NO: 54 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Hussel (feat. Afrikan Boy)', 5, 265, 5
  );

/* INSERT QUERY NO: 55 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Mango Pickle Down River (with The Wilcannia Mob)', 5, 233, 6
  );

/* INSERT QUERY NO: 56 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'$20', 5, 274, 7
  );

/* INSERT QUERY NO: 57 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Down River', 5, 233, 8
  );

/* INSERT QUERY NO: 58 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'The Turn', 5, 232, 9
  );

/* INSERT QUERY NO: 59 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'XR2', 5, 260, 10
  );

/* INSERT QUERY NO: 60 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Paper Planes', 5, 204, 11
  );

/* INSERT QUERY NO: 61 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Come Around (feat. Timbaland)', 5, 233, 12
  );

/* INSERT QUERY NO: 62 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'15 Step', 6, 237, 1
  );

/* INSERT QUERY NO: 63 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Bodysnatchers', 6, 242, 2
  );

/* INSERT QUERY NO: 64 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Nude', 6, 255, 3
  );

/* INSERT QUERY NO: 65 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Weird Fishes/Arpeggi', 6, 318, 4
  );

/* INSERT QUERY NO: 66 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'All I Need', 6, 228, 5
  );

/* INSERT QUERY NO: 67 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Faust Arp', 6, 129, 6
  );

/* INSERT QUERY NO: 68 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Reckoner', 6, 290, 7
  );

/* INSERT QUERY NO: 69 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'House Of Cards', 6, 328, 8
  );

/* INSERT QUERY NO: 70 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Jigsaw Falling Into Place', 6, 248, 9
  );

/* INSERT QUERY NO: 71 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Videotape', 6, 279, 10
  );

/* INSERT QUERY NO: 72 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Packt Like Sardines In A Crushd Tin Box', 7, 240, 1
  );

/* INSERT QUERY NO: 73 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Pyramid Song', 7, 288, 2
  );

/* INSERT QUERY NO: 74 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Pulk/Pull Revolving Doors', 7, 247, 3
  );

/* INSERT QUERY NO: 75 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'You And Whose Army?', 7, 190, 4
  );

/* INSERT QUERY NO: 76 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'I Might Be Wrong', 7, 293, 5
  );

/* INSERT QUERY NO: 77 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Knives Out', 7, 254, 6
  );

/* INSERT QUERY NO: 78 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Morning Bell/Amnesiac', 7, 194, 7
  );

/* INSERT QUERY NO: 79 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Dollars & Cents', 7, 291, 8
  );

/* INSERT QUERY NO: 80 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Hunting Bears', 7, 121, 9
  );

/* INSERT QUERY NO: 81 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Like Spinning Plates', 7, 237, 10
  );

/* INSERT QUERY NO: 82 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Life In A Glass House', 7, 274, 11
  );

/* INSERT QUERY NO: 83 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Anne', 8, 208, 1
  );

/* INSERT QUERY NO: 84 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Creator', 8, 213, 2
  );

/* INSERT QUERY NO: 85 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'I''m a Lady', 8, 223, 3
  );

/* INSERT QUERY NO: 86 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'LES artistes', 8, 204, 4
  );

/* INSERT QUERY NO: 87 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Lights Out', 8, 192, 5
  );

/* INSERT QUERY NO: 88 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'My Superman', 8, 180, 6
  );

/* INSERT QUERY NO: 89 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Say Aha', 8, 215, 7
  );

/* INSERT QUERY NO: 90 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'shove It', 8, 226, 8
  );

/* INSERT QUERY NO: 91 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Startruck', 8, 234, 9
  );

/* INSERT QUERY NO: 92 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Unstppable', 8, 212, 10
  );

/* INSERT QUERY NO: 93 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'You´ll Find A Way', 8, 180, 11
  );

/* INSERT QUERY NO: 94 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'You´ll Find A way(remix)', 8, 192, 12
  );

/* INSERT QUERY NO: 95 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Halfway Home', 9, 331, 1
  );

/* INSERT QUERY NO: 96 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Crying', 9, 250, 2
  );

/* INSERT QUERY NO: 97 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Dancing Choose', 9, 176, 3
  );

/* INSERT QUERY NO: 98 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Stork And Owl', 9, 241, 4
  );

/* INSERT QUERY NO: 99 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Golden Age', 9, 251, 5
  );

/* INSERT QUERY NO: 100 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Family Tree', 9, 333, 6
  );

/* INSERT QUERY NO: 101 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Red Dress', 9, 265, 7
  );

/* INSERT QUERY NO: 102 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Love Dog', 9, 336, 8
  );

/* INSERT QUERY NO: 103 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Shout Me Out', 9, 255, 9
  );

/* INSERT QUERY NO: 104 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'DLZ', 9, 228, 10
  );

/* INSERT QUERY NO: 105 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Lover''s Day', 9, 355, 11
  );

/* INSERT QUERY NO: 106 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'The Wrong Way', 10, 278, 1
  );

/* INSERT QUERY NO: 107 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Staring at the Sun', 10, 206, 2
  );

/* INSERT QUERY NO: 108 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Dreams', 10, 309, 3
  );

/* INSERT QUERY NO: 109 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'King Eternal', 10, 267, 4
  );

/* INSERT QUERY NO: 110 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Ambulance', 10, 294, 5
  );

/* INSERT QUERY NO: 111 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Poppy', 10, 367, 6
  );

/* INSERT QUERY NO: 112 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Don''t Love You', 10, 331, 7
  );

/* INSERT QUERY NO: 113 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Bomb Yourself', 10, 331, 8
  );

/* INSERT QUERY NO: 114 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Wear You Out', 10, 440, 9
  );

/* INSERT QUERY NO: 115 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'You Could Be Love', 10, 436, 10
  );

/* INSERT QUERY NO: 116 */
INSERT INTO songs(title, album_id, length, track_no)
VALUES
  (
'Staring at the Sun (Demo)', 10, 377, 11
  );


