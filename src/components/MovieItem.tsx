import React from "react";
import {MovieResult} from "./MoviesList";
import styled from "styled-components";

export function MovieItem({movie}: { movie: MovieResult }) {
  return (
    <li key={movie.imdbID}>
      <Frame>
        <Content>
          <PosterContainer>
            <img src={movie.Poster} alt={movie.Title}/>
          </PosterContainer>
          <Title>{movie.Title} <span>({movie.Year})</span></Title>
        </Content>
      </Frame>
    </li>
  );
}

export function MovieItemPlaceholder() {
  return (
    <li>
      <Frame>
        <Content>
          <Title>Loading</Title>
        </Content>
      </Frame>
    </li>
  )
}

const Frame = styled.div`
  & {
    border-top: #111111 1px solid;
    display: flex;
  }
  &:last-child {
    border-bottom: #111111 1px solid;
  }
  
  &:before {
    left: -10px;
  }
  
  &:after {
    left: 10px;
  }
  
  &:before, &:after {
    width: 10px;
    display: block;
    height: 95px;
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=   );
    position: relative;
    top: -1px;
    bottom: 0;
    right: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAALUlEQVQoU2NkYGD4z0AEYCRHIUgTNgC2EWYiLkUwjf8HgUKYewl6hmBIEh2OAAs1EAGU8ZmkAAAAAElFTkSuQmCC);
    background-repeat: repeat;
  }
`

const Content = styled.div`
  width: 100%;
`

const PosterContainer = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  color: #000;
  font-size: 1vw;
`
