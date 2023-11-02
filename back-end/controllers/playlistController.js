const express = require("express");

const playlists = express.Router({ mergeParams: true});

const { getOneSong } = require("../queries/songs");

const {
    getAllPlaylists, 
    getOnePlaylist, 
    deletePlaylist, 
    createPlaylist, 
    updatePlaylist
} = require("../queries/playlists");

playlists.get("/", async (req, res) => {
    const {song_id} = req.params;
    try{
        const song = await getOneSong(song_id);
        const allPlaylists = await getAllPlaylists(song_id);
        req.json({...song, allPlaylists});
    } catch(err){
        res.json(err)
    }
});

playlists.get("/:playlist_id", async (req, res) => {
    const { playlist_id, song_id} = req.params; 
    try {
        const playlist = await getOnePlaylist(playlist_id);
        const song = await getOneSong(song_id);
        if (playlist_id){
            req.json({...song, playlist});
        }
    } catch (err){
        res.json(err);
    }
});

playlists.post("/", async (req, res) => {
    try{
        const {song_id} = req.params;
        const createdPlaylist = await createPlaylist(song_id, req.body);
        res.json(createdPlaylist);
    } catch(err){
        res.status(400).json({ error: "Oh no you didn't do it correctly! Go back! :-)"})
    }
});

playlists.delete("/:playlist_id", async (req, res) => {
    try {
      const { playlist_id } = req.params;
      const deletedPlaylist = await deletePlaylist(playlist_id);
  
      if (deletedPlaylist) {
        res.status(200).json({
          success: true,
          payload: {
            data: deletedPlaylist,
          },
        });
      } else {
        res.status(404).json("There is no playlist found");
      }
    } catch (err) {
      res.send(err);
    }
  });

  playlists.put("/:id", async (req, res) => {
    const { id, song_id} = req.params;
    const updatedPlaylist = await updatePlaylist( {song_id, id, ...req.body} );
    if(updatedPlaylist.id) {
        res.status(200).json(updatedPlaylist)
    } else {
        res.status(404).json("PLAYLIST IS NOT HERE!")
    }

});

module.exports = playlists;