import React, {useEffect, useState} from 'react';
import types from 'prop-types';
import './components.css';

const Photo = ({url, onLoadHeight, onLoadWidth}) => {

    const [loadImg, setLoadImg] = useState(null);

    let style = {
        width: onLoadWidth || undefined,
        height: onLoadHeight || undefined
    };

    useEffect(() => {
        let img = new Image();
        img.onload = () => {
            setLoadImg(url);
        };
        img.setAttribute('src', url);
    }, [url]);

    return(
        <div className={["component__photo", loadImg !== null && 'component__photo--load'].join(' ')} style={style}>
            <img src={loadImg} alt="" className="component__photo-url"/>
        </div>
    );
};

Photo.propTypes = {
    url: types.string.isRequired,
    onLoadHeight: types.number,
    onLoadWidth: types.number
};

export default Photo;