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
