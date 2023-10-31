import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_API_URL

function Songs(){
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        fetch(`${API}/songs`)
        .then(response => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            setSongs(responseJSON.data.payload);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Take me there</th>
                            <th>See this Song</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                            return <Song key={song.id} song={song} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Songs; 