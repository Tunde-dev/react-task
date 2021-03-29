import React, { useState } from 'react';
import Details from './Details'

const Movie = ({movie, key}) => {
    const [showMore, setShowMore] = useState(false);

    const showMoreHandler = () => {
        setShowMore(!showMore)
    }
    return (
        <div key={key}>
            <h2>{movie.title}</h2>
            <div className="d-flex space-between">
                <h3>Year: {movie.year}</h3>
                <h3>Runtime: {movie.runtime}</h3>
            </div>
            <button className="show-more" onClick={showMoreHandler}>{showMore ? "Show Less" : "Show More"}</button>
            {showMore && <Details movie={movie}/>}
        </div>
    )
}
export default Movie;