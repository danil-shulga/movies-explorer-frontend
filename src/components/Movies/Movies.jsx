import React, { useState, useEffect } from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MovieCard from './MovieCard/MovieCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Movies.module.css';
import moviesApi from '../../utils/MoviesApi';
import useFormAndValidation from '../../hooks/useFormAndInputValidation';
import { useResize } from '../../hooks/useResize';
import CardListMessage from './CardListMessage/CardListMessage';
import {
  SHORT_MOVIE_DURATION,
  LARGE_WINDOW_INIT,
  LARGE_WINDOW_STEP,
  MEDIUM_WINDOW_SIZE,
  MEDIUM_WINDOW_INIT,
  MEDIUM_WINDOW_STEP,
  SMALL_WINDOW_SIZE,
  SMALL_WINDOW_INIT,
  SMALL_WINDOW_STEP,
} from '../../utils/constants';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();
  const [shortMoviesToggle, setShortMoviesToggle] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasFilteredMovies, setHasFilteredMovies] = useState(true);
  const [shownMovies, setShownMovies] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const windowWidth = useResize();

  // получение данных поиска из localStorage при первой загрузке
  useEffect(() => {
    const savedFilteredMoviesData = JSON.parse(localStorage.getItem('filteredMoviesData'))
    if (savedFilteredMoviesData?.searchValue) {
      values.search = savedFilteredMoviesData.searchValue
      setIsValid(true)
      filterMovies() 
    }
    if (savedFilteredMoviesData?.shortMovies) setShortMoviesToggle(savedFilteredMoviesData.shortMovies)
  }, [])

  // получение списка всех фильмов с сервера если их нет в localStorage
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('movies'))?.length > 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
        })
        .catch((err) => console.error('ошибка при загрузке фильмов', err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  function filterMovies() {
    setFilteredMovies(
      JSON.parse(localStorage.getItem('movies')).filter((movie) => {
        if (shortMoviesToggle) {
          return (
            movie.nameRU.toLowerCase().includes(values?.search?.toLowerCase()) &&
            movie.duration <= SHORT_MOVIE_DURATION
          );
        } else
          return movie.nameRU
            .toLowerCase()
            .includes(values?.search?.toLowerCase());
      })
    );
  }

  function saveFiltersDataToLocalStorage() {
    localStorage.setItem(
      'filteredMoviesData',
      JSON.stringify({
        movies: filteredMovies,
        searchValue: values?.search?.toLowerCase(),
        shortMovies: shortMoviesToggle,
      })
    );
  }

  function cardsQuantities() {
    const quantities = { init: LARGE_WINDOW_INIT, step: LARGE_WINDOW_STEP };
    if (windowWidth <= SMALL_WINDOW_SIZE) {
      quantities.init = SMALL_WINDOW_INIT;
      quantities.step = SMALL_WINDOW_STEP;
    } else if (windowWidth <= MEDIUM_WINDOW_SIZE) {
      quantities.init = MEDIUM_WINDOW_INIT;
      quantities.step = MEDIUM_WINDOW_STEP;
    }
    return quantities;
  }

  function showMovies() {
    setShownMovies((shownMoviesArr) => {
      return [
        ...shownMoviesArr,
        ...filteredMovies.slice(
          shownMoviesArr.length,
          shownMoviesArr.length + cardsQuantities().step
        ),
      ];
    });
  }

  // отображение начальных карточек
  useEffect(() => {
    setShownMovies(filteredMovies.slice(0, cardsQuantities().init));
  }, [filteredMovies, windowWidth, shortMoviesToggle]);

  // проверка необходимости кнопки ShowMoreButton
  useEffect(() => {
    if (shownMovies < filteredMovies) setShowMoreButton(true);
    else setShowMoreButton(false);
  }, [shownMovies, filteredMovies, shortMoviesToggle]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      setHasFilteredMovies(filteredMovies.length > 0);
    }
    saveFiltersDataToLocalStorage()
  }, [filteredMovies]);

  useEffect(() => {
    if (!isFirstLoad) filterMovies();
  }, [shortMoviesToggle]);

  return (
    <>
      <Header {...props} currentPage="movies" />
      <main className={styles.movies__main}>
        <SearchBlock
          filterMovies={filterMovies}
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={isValid}
          shortMoviesToggle={shortMoviesToggle}
          setShortMoviesToggle={setShortMoviesToggle}
        />
        {isLoading ? (
          <Preloader />
        ) : hasFilteredMovies ? (
          <MoviesCardList element={MovieCard} movies={shownMovies} />
        ) : (
          <CardListMessage text="Ничего не найдено" />
        )}
        {showMoreButton && (
          <button
            className={styles.movies__showMore}
            type="button"
            onClick={showMovies}>
            Ещё
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
