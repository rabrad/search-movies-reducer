import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Container, Card } from 'semantic-ui-react';

import Movie from './components/Movie';
import Search from './components/Search';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

const MOVIE_API_URL =
  ' https://api.themoviedb.org/3/search/movie?api_key=1ef16d5579e06e964d3ad00ecbfb4ba2&language=en-US&query=Batman&page=1&include_adult=false';

const initialState = {
  loading: true,
  movie: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.results,
        });
      });
  }, []);

  const search = (query) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1ef16d5579e06e964d3ad00ecbfb4ba2&query=${query}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        const results = jsonResponse.results;
        if (results) {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: results,
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: 'Please type a movie name first',
          });
        }
      });
  };
  const { movies, errorMessage, loading } = state;
  return (
    <Container>
      <AppHeader text={'Search a Movie'} />
      <Search search={search} />

      <div style={{ marginTop: '10px' }}>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>
            <h2>{errorMessage}</h2>
          </div>
        ) : (
          <Card.Group itemsPerRow={4} stackable>
            {movies.map((movie, i) => (
              <Movie key={i} movie={movie} />
            ))}
          </Card.Group>
        )}
        <Footer />
      </div>
    </Container>
  );
}

export default App;
