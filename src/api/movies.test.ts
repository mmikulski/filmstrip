import {initialState, useMovies, useMovieSearch} from "./movies";
import {act, renderHook} from "@testing-library/react-hooks";

import fetchMock from "jest-fetch-mock";
import { wait } from "@testing-library/react";

fetchMock.enableMocks();

describe("useMovies query", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("has initial state", () => {
    fetchMock.mockResponseOnce('');
    const {result} = renderHook(() => useMovies(initialState));

    expect(result.current.movies).toEqual(initialState);
  })


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
});
