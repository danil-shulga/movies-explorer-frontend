import React from 'react';
import styles from './Footer.module.css'

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footer__title}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <p className={styles.footer__copyright}>© 2020</p>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}><a className={styles.footer__link} href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a></li>
        <li className={styles.footer__listItem}><a className={styles.footer__link} href='https://github.com/' target='_blank'>Github</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
