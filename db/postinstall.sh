#!/usr/bin/env bash
echo "Running postinstall db setup for lg-filthy-flamingo-music-app on heroku";
echo DB
dropdb music_api --host=DATABASE_URL
createdb music_api --host=DATABASE_URL
psql -h DATABASE_URL music_api
psql -h DATABASE_URL music_api < ./db/data.sql