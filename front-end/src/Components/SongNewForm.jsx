import { useState } from "react";
import {useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm(){
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name:"", 
        artist: "",
        album: "",
        time: Number,
        is_favorite: false,
    });

    const addSong = () => {
        fetch(`${API}/songs`, {
            method: "POST",
            body:JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            navigate(`/songs`);
        })
        .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setSong({...song, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Tuner App"
                required
                />
                <label htmlFor="url">URL:</label>
                <input
                id="url"
                type="text"
                pattern="http[s]*://.+"
                required
                value={song.url}
                placeholder="http://"
                onChange={handleTextChange}
                />
                <label htmlFor="album">Album:</label>
                <input
                id="album"
                type="text"
                name="album"
                value={song.album}
                placeholder=""
                onChange={handleTextChange}
                />
                <label htmlFor="time">Time:</label>
                <input 
                id="time"
                type="number"
                name="time"
                value={song.time}
                placeholder=""
                onChange={handleTextChange}
                />
                <label htmlFor="isFavorite">Favorite:</label>
                <input 
                id="isFavorite"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={song.is_favorite}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SongNewForm;