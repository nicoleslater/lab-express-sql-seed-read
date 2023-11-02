const db = require("../db/dbConfig.js");

const getAllPlaylists = async(song_id) => {
    try {
        const allPlaylists = await db.any("SELECT * FROM playlists WHERE song_id=$1", 
    song_id
    );
    return allPlaylists
    } catch(err){
        return err
    }
}

const getOnePlaylist = async (id) => {
    try {
        const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
        return onePlaylist
    } catch (error){
        return error
    }
}

const deletePlaylist = async (id) => {
    try {
        deletedPlaylist = await db.one(
            "DELETE from playlists WHERE id = $1 RETURNING *",
            id
        )
        return deletedPlaylist
    } catch(err){
        return err
    }
}

const createPlaylist = async (song_id, playlist) => {
    try {
        const {song, artist, name, time, is_favorite} = playlist;
        const createdPlaylist = await db.one(
            `INSERT INTO playlists (name, artist, album, time, is_favorite, song_id)
            VALUES 
            ($1, $2, $3, $4, $5, $6) RETURNING *
            `,
            [song, artist, name, time, is_favorite, song_id]
        );
        return createdPlaylist
    } catch(err){
        return err
    }
}

const updatePlaylist = async (playlist) => {
    try {
        const { song, artist, name, time, is_favorite} = playlist;
        const updatedPlaylist = await db.one(
            `UPDATE playlists SET
            song=$1, artist=$2, album=$3, time=$4, is_favorite=$5, song_id=$6 WHERE id=$7
            RETURNING *`,
            [song, artist, album, name, time, is_favorite, song_id, id]
        );
        return updatedPlaylist
    } catch(err){
        return err
    }
}

module.exports = {
    getAllPlaylists, 
    getOnePlaylist, 
    deletePlaylist, 
    createPlaylist, 
    updatePlaylist
}