import React from 'react';
import types from 'prop-types';
import './components.css';

const User = ({name, email}) => {
    return(
        <div className="component__user">
            <img src="/img/no_image.jpg" width="50" height="50" className="component__user-avatar"/>
            <div className="gallery__user-info">
                <p className="component__user-info-name">{name}</p>
                <p className="component__user-info-email">{email}</p>
            </div>
        </div>
    );
};

User.propTypes = {
    name: types.string.isRequired,
    email: types.string.isRequired
};

export default User;