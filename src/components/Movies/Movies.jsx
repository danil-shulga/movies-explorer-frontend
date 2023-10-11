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
import CardListMessage from './CardListMessage/CardListMessage';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [shortMoviesToggle, setShortMoviesToggle] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasFilteredMovies, setHasFilteredMovies] = useState(true);
  const [shownMovies, setShownMovies] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const windowWidth = window.innerWidth;

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
            movie.nameRU.toLowerCase().includes(values.search.toLowerCase()) &&
            movie.duration <= 40
          );
        } else
          return movie.nameRU
            .toLowerCase()
            .includes(values.search.toLowerCase());
      })
    );
  }

  function cardsQuantities() {
    const quantities = { init: 12, step: 3 };
    if (windowWidth < 682) {
      quantities.init = 5;
      quantities.step = 2;
    } else if (windowWidth < 1281) {
      quantities.init = 8;
      quantities.step = 2;
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
  }, [filteredMovies]);

  // проверка необходимости кнопки ShowMoreButton
  useEffect(() => {
    if (shownMovies < filteredMovies) setShowMoreButton(true);
    else setShowMoreButton(false);
  }, [shownMovies, filteredMovies]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else setHasFilteredMovies(filteredMovies.length > 0);
  }, [filteredMovies]);

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
