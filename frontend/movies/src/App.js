import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Loading from './components/Loading';
import brokenImg from './broken-img.png'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/movies")
      .then(res => res.json())
      .then(
        (result) => {
          setMovies(result);
          setIsLoaded(true);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    },2000)
  }, [])

  const onImageError = (e) => {
    e.target.onerror = "";
    e.target.src = brokenImg;
    return true;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>The 100 of movies</h1>
      </header>
      <main>
        <div class="wrapper">
          {isLoaded 
          ? movies.map((movie, index) => {
          return (
            <div class="card">
              <img src={movie.posterUrl} alt={movie.title} onError={onImageError}/>
              <div class="descriptions">
                <Movie movie={movie} key={index}/>
              </div>
            </div>
          )}) 
          : <Loading/>}  
        </div>
      </main>
    </div>
  );
}

export default App;
