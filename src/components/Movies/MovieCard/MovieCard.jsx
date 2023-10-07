import React from 'react';
import styles from './MovieCard.module.css'

function MovieCard(props) {
  return (
    <li className={styles.movieCard}>
      <img className={styles.movieCard__img} src={require("../../../images/cover-trains.jpg")} alt={props.alt} />
      <div className={styles.movieCard__description}>
        <h2 className={styles.movieCard__name}>33 слова о дизайне</h2>
        <p className={styles.movieCard__duration}>1ч 47м</p>
        <button className={`${styles.movieCard__button} ${styles.movieCard__button_active} ${props.deleteButton && styles.movieCard__button_delete}`} />
      </div>
    </li>
  );
}

export default MovieCard;
