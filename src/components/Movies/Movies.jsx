import React from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MovieCard from './MovieCard/MovieCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  return (
    <>
      <Header {...props} currentPage='movies' />
      <SearchBlock />
      <MoviesCardList>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default Movies;
