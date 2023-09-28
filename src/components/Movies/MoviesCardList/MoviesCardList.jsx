import React from 'react';
import styles from './MoviesCardList.module.css'

function MoviesCardList(props) {
  return (
    <section className={styles.moviesCardList}>
      {props.children}
    </section>
  );
}

export default MoviesCardList;
