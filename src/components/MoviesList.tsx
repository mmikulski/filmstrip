import React from "react";
import {MovieItem, MovieItemPlaceholder} from "./MovieItem";

export type MovieResult = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export const MOVIE_LIST_CONTAINER_TESTID = 'movieListContainerTestid';

export function MoviesList({movies}: {movies: MovieResult[]}) {
  return (
    <div data-testid={MOVIE_LIST_CONTAINER_TESTID}>
      <ul>
        {(movies.length > 0) ? (
          movies.map((movie: MovieResult) => (<MovieItem movie={movie} />))
        ) : (
          <MovieItemPlaceholder />
        )}
      </ul>
    </div>
  );
}
