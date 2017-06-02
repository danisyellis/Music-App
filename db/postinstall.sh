#!/usr/bin/env bash
echo "Running postinstall db setup for lg-filthy-flamingo-music-app on heroku";
set PGPASSWORD=e3f9819aed48d0a6ede65e245bb70cac36539763e6312fd917d6c38db87737ec
psql -h ec2-23-23-234-118.compute-1.amazonaws.com -p 5432 -U fdcffxnwmekpro d96lrtbt1mqmjh -t -c "select 'drop table\"' || tablename || '\" cascase;' from pg_tables where schemaname='public'" | psql -h -h ec2-23-23-234-118.compute-1.amazonaws.com -p 5432 -U fdcffxnwmekpro d96lrtbt1mqmjh
psql -h ec2-23-23-234-118.compute-1.amazonaws.com -p 5432 -U fdcffxnwmekpro d96lrtbt1mqmjh -f schema.sql
psql -h ec2-23-23-234-118.compute-1.amazonaws.com -p 5432 -U fdcffxnwmekpro d96lrtbt1mqmjh -f data.sql