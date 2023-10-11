import React, { useContext } from 'react';
import styles from './SavedMovieCard.module.css';
import mainApi from '../../../utils/MainApi';
import SavedMoviesContext from '../../../contexts/SavedMoviesContext';
import { Link } from 'react-router-dom';

function SavedMovieCard(props) {
  const JWT = JSON.parse(localStorage.getItem('user'))?.token;
  const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext);
  const { movie } = props;
  const { _id, movieId, nameRU, duration, image, trailerLink } = movie;

  function deleteMovieFromServer(_id, JWT) {
    return mainApi
      .deleteMovie(_id, JWT)
      .then((res) => {
        setSavedMovies((movies) => movies.filter((movie) => movie._id !== _id));
      })
      .catch((err) => console.error('ошибка при удалении фильма', err));
  }

  function durationCalc(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <Link to={trailerLink} target="_blank" className={styles.savedMovieCard}>
      <img
        className={styles.savedMovieCard__img}
        src={`${image}`}
        alt={props.alt}
      />
      <div className={styles.savedMovieCard__description}>
        <h2 className={styles.savedMovieCard__name}>{nameRU}</h2>
        <p className={styles.savedMovieCard__duration}>
          {durationCalc(duration)}
        </p>
        <button
          className={`${styles.savedMovieCard__button} ${
            styles.savedMovieCard__button_active
          } ${props.deleteButton && styles.savedMovieCard__button_delete}`}
          onClick={(e) => {
            e.preventDefault()
            deleteMovieFromServer(_id, JWT);
          }}
        />
      </div>
    </Link>
  );
}

export default SavedMovieCard;
