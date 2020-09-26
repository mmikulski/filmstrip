import React from "react";
import {MovieItem, MovieItemPlaceholder} from "./MovieItem";
import {Container} from "@material-ui/core";

export type MovieResult = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export const MOVIE_LIST_CONTAINER_TESTID = 'movieListContainerTestid';

export function MoviesList({loading, movies}: { loading: boolean, movies: MovieResult[] }) {

  return (
    <Container data-testid={MOVIE_LIST_CONTAINER_TESTID}>
        {(movies && movies.length > 0) ? (
          movies.map((movie: MovieResult) => (<MovieItem key={movie.imdbID} movie={movie}/>))
        ) : (
          loading && <MovieItemPlaceholder />
        )}
    </Container>
  );
}
