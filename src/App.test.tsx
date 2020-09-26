import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {MOVIE_LIST_CONTAINER_TESTID} from "./components/MoviesList";

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(MOVIE_LIST_CONTAINER_TESTID)).toBeInTheDocument();
});
