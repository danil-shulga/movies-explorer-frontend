import React from 'react';
import styles from './PopupMenu.module.css';
import ProfileBtn from '../../Header/ProfileBtn/ProfileBtn';
import { Link } from 'react-router-dom';

function PopupMenu(props) {
  const { burgerMenuIsOpen, burgerMenuToggle } = props;
  return (
    <div
      onClick={burgerMenuToggle}
      className={`${styles.popup} ${burgerMenuIsOpen && styles.popup_active}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.popup__menuBlock}>
        <div
          onClick={burgerMenuToggle}
          className={styles.popup__closeBtn}></div>
        <nav className={styles.menuBlock__nav}>
          <ul className={styles.menuBlock__list}>
            <li
              className={`${styles.menuBlock__item} ${(props.currentPage === 'main') && styles.menuBlock__item_active}`}>
              <Link className={styles.menuBlock__link} to='/'>Главная</Link>
            </li>
            <li
              className={`${styles.menuBlock__item} ${(props.currentPage === 'movies') && styles.menuBlock__item_active}`}>
              <Link className={styles.menuBlock__link} to='/movies'>Фильмы</Link>
            </li>
            <li
              className={`${styles.menuBlock__item} ${(props.currentPage === 'saved-movies') && styles.menuBlock__item_active}`}>
              <Link className={styles.menuBlock__link} to='/saved-movies'>Сохраненные фильмы</Link>
            </li>
            <li
              className={`${styles.menuBlock__item} ${styles.menuBlock__item_profile}`}>
              <ProfileBtn>Аккаунт</ProfileBtn>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PopupMenu;
