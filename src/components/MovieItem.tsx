import React from "react";
import {MovieResult} from "./MoviesList";

export function MovieItem({movie}: { movie: MovieResult }) {
  return (
    <li key={movie.imdbID}>
      <div>
        <div>
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <h1>{movie.Title} <span>({movie.Year})</span></h1>
      </div>
    </li>
  );
}

export function MovieItemPlaceholder() {
  return (
    <li>Loading</li>
  )
}
