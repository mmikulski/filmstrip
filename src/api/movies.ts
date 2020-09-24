import {useQuery} from 'react-query';
import {useState} from "react";

export const initialState = [];
const apiKey = "sdfd";

export const useMovieSearch = (keyword: string) => {
  const apiKeyParam = 'apiKey=' + apiKey;
  const searchParam = 's=' + keyword;
  return useQuery(
    'movies',
    async () => fetch('http://www.omdbapi.com/?' + apiKeyParam + "&" + searchParam)
      .then((res) => {
        return res.json();
      })
  );
}

export const useMovies = (initialState: Array<any>) => {
  const [movies, setMovies] = useState(initialState);

  const {isLoading, data} = useMovieSearch("");

  return {movies, data, useMovieSearch};
}
