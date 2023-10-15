import React, { useState, useEffect, useContext } from 'react';
import SearchBlock from '../Navigation/SearchBlock/SearchBlock';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './SavedMovies.module.css';
import Preloader from '../Preloader/Preloader';
import SavedMoviesCard from '../SavedMovies/SavedMovieCard/SavedMovieCard';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';
import useFormAndValidation from '../../hooks/useFormAndInputValidation';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function SavedMovies(props) {
  const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [shortMoviesToggle, setShortMoviesToggle] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function filterMovies() {
    setFilteredMovies(
      savedMovies.filter((movie) => {
        if (shortMoviesToggle) {
          return (
            movie.nameRU
              .toLowerCase()
              .includes(values?.search?.toLowerCase() || '') &&
            movie.duration <= SHORT_MOVIE_DURATION
          );
        } else
          return movie.nameRU
            .toLowerCase()
            .includes(values?.search?.toLowerCase() || '');
      })
    );
  }

  // перерисовка отфильтрованных карточек при удалении с сохранением фильтра
  useEffect(() => {
    filterMovies();
  }, [savedMovies]);

  // отображение начальных карточек
  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, []);

  useEffect(() => {
    filterMovies();
  }, [shortMoviesToggle]);

  return (
    <>
      <Header {...props} currentPage="saved-movies" />
      <main className={styles.savedMovies__main}>
        <SearchBlock
          filterMovies={filterMovies}
          values={values}
          handleChange={handleChange}
          isValid
          shortMoviesToggle={shortMoviesToggle}
          setShortMoviesToggle={setShortMoviesToggle}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList element={SavedMoviesCard} movies={filteredMovies} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
