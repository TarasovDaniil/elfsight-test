import React, { useEffect, useState } from 'react';
import types from 'prop-types';
import './main.css';
import User from "../components/User";
import {Link} from "react-router-dom";

const ChooseAuthor = ({}) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => setAuthors(result))
            .catch((error) => console.error(error));
    }, []);

    return(
        <div className="page__choose-author">
            <div className="page__header"><h1>Choose Author:</h1></div>
            <div className="page__choose-container">
                {authors.map((author) =>
                    <Link to={"/users/" + author.id + '/albums'} key={author.id}>
                        <User email={author.email} name={author.name}/>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ChooseAuthor;