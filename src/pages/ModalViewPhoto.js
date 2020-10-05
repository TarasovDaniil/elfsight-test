import React, {useEffect} from 'react';
import types from 'prop-types';
import Photo from "../components/Photo";
import {Link, useHistory} from "react-router-dom";

const ModalViewPhoto = ({photos, nowId, albumId}) => {
    let history = useHistory();

    let nowIdx = false, prevId = false, nextId = false;
    let photo = photos.find((elem, idx) => {
        nowIdx = idx;
        return elem.id === nowId;
    });

    if (nowIdx === 0){
        prevId = photos[photos.length - 1].id;
        nextId = photos[1].id;
    } else if (nowIdx === photos.length - 1){
        prevId = photos[nowIdx - 1].id;
        nextId = photos[0].id;
    } else {
        prevId = photos[nowIdx - 1].id;
        nextId = photos[nowIdx + 1].id;
    }

    photo = photo.url;

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    });

    return(
        <div className="modal__gallery" onClick={() => history.push('/albums/'+albumId + '/photos')}>
            <div className="modal__gallery-container" onClick={(e) => e.stopPropagation()}>
                <div className="photo-gallery">
                    <Link to={'/albums/'+albumId + '/photos?id=' + prevId} className="photo-gallery__arrow photo-gallery__arrow-left">
                        <i>❮</i>
                    </Link>
                    <Photo url={photo} />
                    <Link to={'/albums/'+albumId + '/photos?id=' + nextId} className="photo-gallery__arrow photo-gallery__arrow-right">
                        <i>❯</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ModalViewPhoto.propTypes = {
    photos: types.arrayOf(types.shape({
        id: types.number,
        url: types.string
    })).isRequired,
    nowId: types.number.isRequired,
    albumId: types.number.isRequired
};

export default ModalViewPhoto;