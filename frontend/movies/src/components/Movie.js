import React, { useState } from 'react';
import Details from './Details';
import brokenImg from '../not-found.svg';

const Movie = ({movie}) => {
    const [showMore, setShowMore] = useState(false);

    const showMoreHandler = () => {
        setShowMore(!showMore)
    }

    const onImageError = (e) => {
      e.target.onerror = "";
      e.target.src = brokenImg;
      return true;
    }
    return (
      <div className="card" key={movie.id}>
        <img src={movie.posterUrl} alt={movie.title} onError={onImageError}/>
        <div className="descriptions">
          <h2>{movie.title}</h2>
          <div className="d-flex space-between">
              <h3>Year: {movie.year}</h3>
              <h3>Runtime: {movie.runtime}</h3>
          </div>
          <button className="show-more" onClick={showMoreHandler}>{showMore ? "Show Less" : "Show More"}</button>
          {showMore && <Details movie={movie}/>}
      </div>
    </div>
  )
}
export default Movie;