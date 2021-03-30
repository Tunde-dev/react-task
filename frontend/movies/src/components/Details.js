import React from 'react';

const Details = ({movie,key}) => {
    return (
        <div key={key}>
            <h4>Director: {movie.director}</h4>
            <h4>Actors: {movie.actors}</h4>
            <p>{movie.plot}</p>
        </div>
    )
}

export default Details;