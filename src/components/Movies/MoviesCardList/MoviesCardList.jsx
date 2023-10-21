import React from 'react';
import styles from './MoviesCardList.module.css';

function MoviesCardList(props) {
  const { element: Component, movies } = props;

  function renderCards() {
    return movies.map((movie) => (
      <Component key={movie.id || movie.movieId} movie={movie} />
    ));
  }

  return (
    <section className={styles.moviesCardList}>
      <ul className={styles.moviesCardList__list}>{renderCards()}</ul>
    </section>
  );
}

export default MoviesCardList;
