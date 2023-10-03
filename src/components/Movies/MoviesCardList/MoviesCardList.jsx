import React from 'react';
import styles from './MoviesCardList.module.css'

function MoviesCardList(props) {
  return (
    <section className={styles.moviesCardList}>
      <ul className={styles.moviesCardList__list}>
      {props.children}
      </ul>
    </section>
  );
}

export default MoviesCardList;
