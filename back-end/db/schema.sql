DROP DATABASE IF EXISTS tuner_app;

CREATE DATABASE tuner_app;

\c tuner_appl

CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    artist TEXT, 
    album TEXT, 
    time TEXT, 
    is_favorite BOOLEAN
);