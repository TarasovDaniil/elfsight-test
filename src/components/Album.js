import React from 'react';
import types from 'prop-types';
import './components.css';
import Photo from "./Photo";

const Album = ({title, photos, countAlbumPhoto}) => {

    let countOfCover = 0;

    let cover = photos.slice(0, 4).map((photo) => {
        countOfCover++;
        return (<Photo url={photo.thumbnailUrl} key={photo.id}/>);
    });

    return(
        <div className="component__album">
            <div className={"component__album-cover component__album-cover-"+countOfCover}>
                {cover}
            </div>
            <div className="component__album-cover-count-photos"><span>{countAlbumPhoto}</span></div>
            <div className="component__album-info">
                <p className="component__album-info-title">{title}</p>
            </div>
        </div>
    );
};

Album.propTypes = {
    title: types.string.isRequired,
    photos: types.arrayOf(types.shape({
        id: types.number,
        thumbnailUrl: types.string
    })).isRequired,
    countAlbumPhoto: types.number.isRequired
};

export default Album;