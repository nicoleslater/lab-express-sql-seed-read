import {useState, useEffect} from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_API_URL

function SongDetails(){
    const [song, setSong] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setSong(responseJSON)
        })
        .catch(error => console.log(error))
    }, [id, API])

    const handleDelete = () => {
        deleteSong()
    }

    const deleteSong = () => {
        const httpOptions = {method: "DELETE"}
        fetch(`${API}/songs/${id}`, httpOptions)
        .then(() => navigate(`/songs`))
        .catch(error => console.log(error))
    }

    return (
        <article>
            <h3>{true ? <span>🎤</span> : null}</h3>
            <h5>
                <span>
                    <a href={song.url}>{song.name}</a>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp; {song.url}
            </h5>
            <h6>{song.artist}</h6>
            <p>{song.album}</p>
            <div className="showNavigation">
                <div>
                    <Link to={`/songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/songs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </article>
    );
}

export default SongDetails;