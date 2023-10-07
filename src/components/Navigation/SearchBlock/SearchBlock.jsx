import React from 'react';
import styles from './SearchBlock.module.css';
import Checkbox from './Checkbox/Checkbox';

function SearchBlock(props) {
  return (
    <section className={styles.search}>
      <form className={styles.search__form} action="">
        <div className={styles.search__inputWrapper}>
          <input
            className={styles.search__input}
            type="text"
            placeholder="Фильм"
            required
          />
          <input className={styles.search__submit} type="submit" value="" />
        </div>
        <div className={styles.search__params}>
          <Checkbox text='Короткометражки' />
        </div>
      </form>
    </section>
  );
}

export default SearchBlock;
