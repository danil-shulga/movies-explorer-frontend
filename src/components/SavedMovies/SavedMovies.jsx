import React from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MovieCard from '../Movies/MovieCard/MovieCard';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies(props) {
  return (
    <>
    <Header {...props} />
      <SearchBlock />
      <MoviesCardList>
        <MovieCard deleteButton/>
        <MovieCard deleteButton/>
        <MovieCard deleteButton/>
        <MovieCard deleteButton/>
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
