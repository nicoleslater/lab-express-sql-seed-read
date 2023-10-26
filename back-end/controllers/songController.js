const express = require("express");
const {getAllSongs} = require("../queries/songs");

const songs = express.Router();

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){
        res.status(200)
        .json ({ success: true, data: {payload: allSongs}});
    } else {
        res.status(500)
        .json({ success: false, data: {error: "Server Error - we didn't do it!"}});
    }
});

songs.get("/:id", async (req, res) => {
    const {id} = req.params; 
    const oneSong = await getOneSong(id)
    if (oneSong){
        res.json(oneSong)
    } else { 
        res.status(404).json({error: "not found!"})
    }
})

songs.post("/", checkName, checkBoolean, async (req, res) => {
    try {
        const createdSong = await createSong(req.body)
        res.json(createdSong)
    } catch (error){
        res.status(400).json({error: "Huge error!"})
    }
}); 

module.exports = songs; 