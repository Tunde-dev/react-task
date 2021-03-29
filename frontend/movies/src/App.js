import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [canBeSearched, setCanBeSearched] = useState(false);

  const genres =  [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport"
];

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

  

  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex space-around nav">
          <SearchBar 
            input={input}
            setInput={setInput}
            setCanBeSearched={setCanBeSearched}
          />
          <div>
            <label htmlFor="genres">Choose a genre: </label>
            <select name="genres" id="genres">
              {genres.map(genre => <option value={genre.toLowerCase()}>{genre}</option>)}
            </select>
          </div>
        </div>
        <h1>The 100 of movies</h1>
      </header>
      <main>
        <div className="wrapper">
          {canBeSearched && movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())).map((movie => <Movie movie={movie}/>))}
          {isLoaded && !canBeSearched && movies.map(movie => <Movie movie={movie}/>)}
          {!isLoaded && <Loading/>}  
        </div>
      </main>
    </div>
  );
}

export default App;
