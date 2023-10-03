import React from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MovieCard from './MovieCard/MovieCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Movies.module.css'

function Movies(props) {
  return (
    <>
      <Header {...props} currentPage="movies" />
      <main className={styles.movies__main}>
        <SearchBlock />
        <MoviesCardList>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
