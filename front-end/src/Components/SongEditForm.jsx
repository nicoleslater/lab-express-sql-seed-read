import { useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongEditForm(){
    let {id} = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name:"", 
        artist: "",
        album: "",
        time: Number,
        is_favorite: false,
    });

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite});
    };

    const updateSong = () => {
        console.log(`${API}/songs/${id}`);

        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json", 
            },
        })
        .then((repsonse) => {
            navigate(`/songs/${id}`);
        })
        .catch((error) => console.error("catch", error));
    };

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then((repsonse) => {
            return response.json();
        })
        .then((responseJSON) => {
            setSong(responseJSON);
        })
        .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong();
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Website"
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
            <Link to={`/songs/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );
}

export default SongEditForm;