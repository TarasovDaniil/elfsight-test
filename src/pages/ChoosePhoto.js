import React, {useEffect, useState} from 'react';
import './main.css';
import { useParams } from "react-router-dom";
import Photo from "../components/Photo";
import {Link} from "react-router-dom";
import {useQuery} from "../util/util";
import ModalViewPhoto from "./ModalViewPhoto";

const ChoosePhoto = () => {
    let { album } = useParams();
    let query = useQuery();
    const [fullAlbum, setFullAlbum] = useState({});
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/'+album + '?_embed=photos&_expand=user')
            .then((response) => response.json())
            .then((result) => {setFullAlbum(result); setLoad(true)})
            .catch((error) => console.error(error));
    }, []);

    return(
        <div className="page__choose-photo">
            <div className="page__header"><h1><Link to={fullAlbum.user ? "/users/" + fullAlbum.user.id + "/albums" : ""}>🠔</Link> Choose Photo:</h1></div>
            <div className="page__choose-container page__choose-photos">
                {fullAlbum.hasOwnProperty('photos') && fullAlbum.photos.map((photo) =>
                    <Link to={'/albums/'+album + '/photos?id=' + photo.id} key={photo.id}>
                        <Photo url={photo.url}/>
                    </Link>
                )}
            </div>
            {!!query.get('id') && load && <ModalViewPhoto nowId={parseInt(query.get('id'))} photos={fullAlbum.photos} albumId={parseInt(album)}/>}
        </div>
    );
};

export default ChoosePhoto;