import React from 'react';
import styles from './NotFoundPage.module.css';

function NotFoundPage(props) {
  return (
    <section className={styles.notFoundPage}>
      <div className={styles.notFoundPage__contentWrapper}>
        <h1 className={styles.notFoundPage__title}>404</h1>
        <p className={styles.notFoundPage__subtitle}>Страница не найдена</p>
      </div>
      <a className={styles.notFoundPage__link} href="/#">
        Назад
      </a>
    </section>
  );
}

export default NotFoundPage;
