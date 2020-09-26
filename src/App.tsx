import React from 'react';
import './App.css';
import {MovieSearch} from "./components/MovieSearch";
import {QueryCache, ReactQueryCacheProvider} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const queryCache = new QueryCache();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactQueryCacheProvider queryCache={queryCache}>
          <MovieSearch />
          <ReactQueryDevtools initialIsOpen />
        </ReactQueryCacheProvider>
      </header>
    </div>
  );
}

export default App;
