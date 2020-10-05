import React, {useEffect, useState} from 'react';
import './main.css';
import { useParams } from "react-router-dom";
import Album from "../components/Album";
import {Link} from "react-router-dom";

const ChooseAlbum = () => {
    let { user } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+user+'/albums?_embed=photos')
            .then((response) => response.json())
            .then((result) => setAlbums(result))
            .catch((error) => console.error(error));
    }, []);

    return(
        <div className="page__choose-album">
            <div className="page__header"><h1><Link to={"/"}>🠔</Link> Choose Album:</h1></div>
            <div className="page__choose-container page__choose-album">
                {albums.map((album) =>
                    <Link to={"/albums/" + album.id + "/photos"} key={album.id}>
                        <Album photos={album.photos} title={album.title} countAlbumPhoto={album.photos.length}/>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ChooseAlbum;