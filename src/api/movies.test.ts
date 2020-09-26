import {buildSearchParams, useMovieSearch} from "./movies";
import {act, renderHook} from "@testing-library/react-hooks";

import fetchMock from "jest-fetch-mock";
import {wait} from "@testing-library/react";

fetchMock.enableMocks();

describe("useMovieSearch query", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches data", async () => {
    const response = {abc: 'abc'};
    fetchMock.mockResponseOnce(JSON.stringify(response));

    const {result} = renderHook(useMovieSearch);

    await act(async () => {
      await wait(() => expect(result.current.isLoading).toBeFalsy())

      await result.current.data;
    })

    expect(result.current.data).toEqual(response);
    expect(result.current.data.abc).toEqual('abc');
    expect(fetchMock).toBeCalledTimes(1);
  })

  it("searches with a keyword", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const keyword = 'someWord';
    const {result} = renderHook(() => useMovieSearch(keyword));

    await act(async () => {
      await wait(() => expect(result.current.isLoading).toBeFalsy())

      await result.current.data;
    })

    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toBeCalledWith(expect.stringContaining(keyword), expect.anything());
  });

  it("returns search results", async () => {
    const response = [
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

    fetchMock.mockResponseOnce(JSON.stringify(response));

    const {result} = renderHook(useMovieSearch);

    await act(async () => {
      await wait(() => expect(result.current.isLoading).toBeFalsy())

      await result.current.data;
    })

    expect(fetchMock).toBeCalledTimes(1);
    expect(result.current.data).toHaveLength(response.length);
  })
});

describe("Year parser", () => {
  const searchPhrase = "Blade (2010)";
  const expectedSearchParams = "s=Blade (2010)&y=2010";

  const result = buildSearchParams(searchPhrase);

  expect(result).toEqual(expectedSearchParams);

})
