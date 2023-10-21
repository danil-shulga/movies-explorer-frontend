import React from 'react';
import styles from './NotFoundPage.module.css';
import { useNavigate } from 'react-router-dom'

function NotFoundPage(props) {
  const navigate = useNavigate()

  return (
    <main className={styles.notFoundPage}>
      <section className={styles.notFoundPage}>
        <div className={styles.notFoundPage__contentWrapper}>
          <h1 className={styles.notFoundPage__title}>404</h1>
          <p className={styles.notFoundPage__subtitle}>Страница не найдена</p>
        </div>
        <button className={styles.notFoundPage__buttonBack} onClick={ () => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;
