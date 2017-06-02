#!/usr/bin/env bash
export `heroku config -s`
echo "Running postinstall db setup for lg-filthy-flamingo-music-app on heroku";
dropdb music_api --host=DATABASE_URL
createdb music_api --host=DATABASE_URL
psql -h DATABASE_URL music_api
psql -h DATABASE_URL music_api < ./db/data.sql