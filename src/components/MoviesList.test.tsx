import React from "react";
import {render} from "@testing-library/react";
import {MOVIE_LIST_CONTAINER_TESTID, MoviesList} from "./MoviesList";

describe("MoviesList", () => {
  it('renders itself', function () {
    const {getByTestId} = render(<MoviesList movies={[]}/>);

    expect(getByTestId(MOVIE_LIST_CONTAINER_TESTID)).toBeInTheDocument();
  });

  it('renders list of MovieResults', function () {
    const movies = [
      {
        "Title": "Blade Runner",
        "Year": "1982",
        "imdbID": "tt0083658",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "Title": "Blade Runner 2049",
        "Year": "2017",
        "imdbID": "tt1856101",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
      }
    ];

    const {container} = render(<MoviesList loading={false} movies={movies}/>);

    expect(container.firstChild.childElementCount).toEqual(movies.length);
  });
});
