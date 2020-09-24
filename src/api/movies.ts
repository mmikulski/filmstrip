import {useQuery} from 'react-query';
import {useCallback, useState} from "react";

export const initialState = [];

export const useMovieSearch = () => {
  return useQuery(
    'movies',
    () => fetch('https://some.url')
      .then((res) => {
        return res.json()
      })
  );
}

export const useMovies = (initialState: Array<any>) => {
  const [movies, setMovies] = useState(initialState);

  const {isLoading, data} = useMovieSearch();

  return {movies, data, useMovieSearch};
}
