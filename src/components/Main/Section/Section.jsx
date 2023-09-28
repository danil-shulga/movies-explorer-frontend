import React from 'react';
import styles from './Section.module.css'

function Section(props) {
  return (
    <section className={`${styles.section} ${props.className}`}>
      <h2 className={styles.section__title}>{props.title}</h2>
      {props.children}
    </section>
  );
}

export default Section;

