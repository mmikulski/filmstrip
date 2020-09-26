import React from 'react';
import './App.css';
import {MovieResult, MoviesList} from "./components/MoviesList";

function App() {
  const movies: MovieResult[] = [
    // {
    //   Title: "A title",
    //   Year: '2000',
    //   imdbID: 'qwe',
    //   Type: 'sdf',
    //   Poster: 'dsfsd'
    // }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <MoviesList movies={movies} />
      </header>
    </div>
  );
}

export default App;
