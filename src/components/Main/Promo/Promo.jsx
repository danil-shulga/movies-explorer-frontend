import React from 'react';
import styles from './Promo.module.css'

function Promo(props) {
  return (
    <section className={styles.promo}>
      <h1 className={styles.promo__title}>Учебный проект студента факультета Веб&#8209;разработки.</h1>
    </section>
  );
}

export default Promo;
