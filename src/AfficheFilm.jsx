import React, { useState, useEffect } from 'react';
import filmsData from './film.json'; 
import avatar from './avatar-2-la-voie-de-l-eau-affiche-de-film-40x54-cm-2022-kate-winslet-james-cameron.jpg';
import legend from './image.jpg';

function printImage(film) {
    if (film.Titre === 'Avatar') {
        return <img src={avatar} alt="Avatar" />;
    } 
    else if (film.Titre === 'Je suis une légende'){
        return <img src={legend} alt ='legend'/>;
    }
    else {
        return null;
    }
}

const FilmList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        setFilms(filmsData);
    }, []);

    return (
        <div>
            <h1>Liste des Films</h1>
            <ul>
                {films.map((film, index) => (
                    <li key={index}>
                        <strong>Titre:</strong> {film.Titre} | <strong>Année:</strong> {film.Année} | <strong>Récompense:</strong>{film.Récompenses + '\n'} {printImage(film)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmList;
