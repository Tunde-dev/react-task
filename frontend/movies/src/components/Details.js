import React from 'react';

const Details = ({movie}) => {
    return (
        <div key={movie.id}>
            Genre: {movie.genres.map(genre => <span>{genre} </span>)}
            <h4>Director: {movie.director}</h4>
            <h4>Actors: {movie.actors}</h4>
            <p>{movie.plot}</p>
        </div>
    )
}

export default Details;