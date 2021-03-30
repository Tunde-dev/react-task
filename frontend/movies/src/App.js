import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [genre, setGenre] = useState('');

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
          },
        (error) => {
          setIsLoaded(true);
          console.log(error)
        }
      )
    },2000)
  }, [])

  const onChangeHandler = (e) => {
    setGenre(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex space-around nav">
          <SearchBar 
            input={input}
            setInput={setInput}
          />
          <div>
            <select name="genres" id="genres" onChange={onChangeHandler}>
              <option>Choose a genre</option>
              {genres.map(genre => <option value={genre}>{genre}</option>)}
            </select>
          </div>
        </div>
        <h1>100 Movies</h1>
      </header>
      <main>
        <div className="wrapper">
          {isLoaded 
            && movies.filter(movie => {
              if (genre && !movie.genres.includes(genre)) {
                return false;
              }
              return input.length > 2 ? movie.title.toLowerCase().includes(input.toLowerCase()) : true
            })
            .map(movie => <Movie movie={movie}/>)}
          {!isLoaded && <Loading/>}  
        </div>
      </main>
    </div>
  );
}

export default App;
