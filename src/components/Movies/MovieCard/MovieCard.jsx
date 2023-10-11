import React, { useState, useContext, useEffect } from 'react';
import styles from './MovieCard.module.css';
import mainApi from '../../../utils/MainApi';
import SavedMoviesContext from '../../../contexts/SavedMoviesContext';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const JWT = JSON.parse(localStorage.getItem('user'))?.token;
  const [isLiked, setIsLiked] = useState(false);
  const [currentSavedCardId, setCurrentSavedCardId] = useState('');
  const { movie } = props;
  const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext);
  const { id, nameRU, duration, image, trailerLink } = movie;

  useEffect(() => {
    savedMovies.map((savedMovie) => {
      if (savedMovie.movieId === id) {
        setCurrentSavedCardId(savedMovie._id);
        setIsLiked(true);
      }
    });
  }, [isLiked]);

  function addMovieToLocalStorage(movie) {
    const arrSavedMovies =
      JSON.parse(localStorage.getItem('savedMovies')) || [];
    arrSavedMovies.push(movie);
    localStorage.setItem('savedMovies', JSON.stringify(arrSavedMovies));
  }

  function addMovieToServer(movie, JWT) {
    return mainApi
      .createMovie(movie, JWT)
      .then((res) => {
        addMovieToLocalStorage(res);
        setSavedMovies((movies) => [...movies, res]);
        setIsLiked(true);
      })
      .catch((err) => console.error('ошибка при сохранении фильма', err));
  }

  function deleteMovieFromServer(_id, JWT) {
    return mainApi
      .deleteMovie(_id, JWT)
      .then((res) => {
        setSavedMovies((movies) =>
          movies.filter((movie) => movie._id !== currentSavedCardId)
        );
        setIsLiked(false);
      })
      .catch((err) => console.error('ошибка при удалении фильма', err));
  }

  function durationCalc(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <Link to={trailerLink} target="_blank" className={styles.movieCard}>
      <img
        className={styles.movieCard__img}
        src={`https://api.nomoreparties.co${image.url}`}
        alt={props.alt}
      />
      <div className={styles.movieCard__description}>
        <h2 className={styles.movieCard__name}>{nameRU}</h2>
        <p className={styles.movieCard__duration}>{durationCalc(duration)}</p>
        <button
          className={`${styles.movieCard__button} ${
            isLiked && styles.movieCard__button_active
          }`}
          onClick={(e) => {
            e.preventDefault()
            if (!isLiked) {
              addMovieToServer(movie, JWT);
            } else {
              deleteMovieFromServer(currentSavedCardId, JWT);
            }
          }}
        />
      </div>
    </Link>
  );
}

export default MovieCard;
