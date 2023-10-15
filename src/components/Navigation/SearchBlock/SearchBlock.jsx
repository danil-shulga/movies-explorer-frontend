import React from 'react';
import styles from './SearchBlock.module.css';
import Checkbox from './Checkbox/Checkbox';

function SearchBlock(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    shortMoviesToggle,
    setShortMoviesToggle,
    filterMovies,
  } = props;

  return (
    <section className={styles.search}>
      <form
        className={styles.search__form}
        onSubmit={(evt) => {
          evt.preventDefault();
          if (isValid) {
            filterMovies();
          }
        }}
        noValidate
        action="">
        <div className={styles.search__inputWrapper}>
          <input
            className={styles.search__input}
            type="text"
            name="search"
            placeholder="Фильм"
            value={values.search || ''}
            onChange={handleChange}
            required
          />
          <input className={styles.search__submit} type="submit" value="" />
        </div>
        <span className={styles.search__errorMessage}>{errors?.search}</span>
        <div className={styles.search__params}>
          <Checkbox
            shortMoviesToggle={shortMoviesToggle}
            setShortMoviesToggle={setShortMoviesToggle}
            isValid={isValid}
            text="Короткометражки"
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBlock;
