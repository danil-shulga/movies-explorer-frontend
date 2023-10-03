import React from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MovieCard from '../Movies/MovieCard/MovieCard';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './SavedMovies.module.css'

function SavedMovies(props) {
  return (
    <>
      <Header {...props} currentPage="saved-movies" />
      <main className={styles.savedMovies__main}>
        <SearchBlock />
        <MoviesCardList>
          <MovieCard deleteButton />
          <MovieCard deleteButton />
          <MovieCard deleteButton />
          <MovieCard deleteButton />
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
