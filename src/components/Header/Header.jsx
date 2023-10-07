import React, { useState } from 'react';

import styles from './Header.module.css';
import headerLogo from '../../images/logo.svg';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import PopupMenu from '../Navigation/PopupMenu/PopupMenu';
import { Link } from 'react-router-dom';

function Header(props) {
  const { loggedIn, header_light, currentPage } = props;
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  function burgerMenuToggle() {
    setBurgerMenuIsOpen((burgerMenuIsOpen) => !burgerMenuIsOpen);
  }

  return (
    <header
      className={`${styles.header} ${header_light && styles.header_light}`}>
      <Link to="/">
        <img className={styles.header__logo} src={headerLogo} alt="логотип" />
      </Link>
      {loggedIn ? (
        <>
          <nav className={styles.header__navFilms}>
            <li>
              <Link
                className={`${styles.header__link} ${
                  props.currentPage === 'movies' && styles.header__link_active
                }`}
                to="/movies">
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.header__link} ${
                  props.currentPage === 'saved-movies' &&
                  styles.header__link_active
                }`}
                to="/saved-movies">
                Сохраненные фильмы
              </Link>
            </li>
          </nav>
          <div className={styles.header__profileWrapper}>
            <ProfileBtn light={header_light}>Аккаунт</ProfileBtn>
          </div>
          <button
            type="button"
            onClick={burgerMenuToggle}
            className={styles.header__burgerBtn}></button>
          <PopupMenu
            currentPage={currentPage}
            burgerMenuIsOpen={burgerMenuIsOpen}
            burgerMenuToggle={burgerMenuToggle}
          />
        </>
      ) : (
        <nav className={styles.header__navAuth}>
          <li>
            <Link className={styles.header__link} to="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.header__link} ${styles.header__link_login}`}
              to="/signin">
              Войти
            </Link>
          </li>
        </nav>
      )}
    </header>
  );
}

export default Header;
