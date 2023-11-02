DROP DATABASE IF EXISTS tuner_app;
CREATE DATABASE tuner_app;

\c tuner_app;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    artist TEXT, 
    album TEXT, 
    time INT, 
    is_favorite BOOLEAN
);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    artist TEXT, 
    album TEXT, 
    time INT, 
    is_favorite BOOLEAN
);