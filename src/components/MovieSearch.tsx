import React, {useState} from "react";
import {MovieResult, MoviesList} from "./MoviesList";
import {useMovieSearch} from "../api/movies";
import {useQueryCache} from "react-query";
import {MovieSearchInput} from "./MovieSearchInput";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'forestgreen',
      paddingTop: theme.spacing(2)
    }
  })
);

export function MovieSearch() {
  const classes = useStyles();

  const [keyword, setKeyword] = useState("");
  const {isLoading, isError} = useMovieSearch(keyword);

  console.log('loading: ' + isLoading);
  console.log('error: ' + isError);

  const cache = useQueryCache();
  let movies = cache.getQueryData(["movies", keyword]) as MovieResult[];

  function getOnChange() {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setKeyword(e.target.value);
    };
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <MovieSearchInput
        onChange={getOnChange()}
      />

      <MoviesList loading={isLoading} movies={movies} />
    </Container>
  );
}
