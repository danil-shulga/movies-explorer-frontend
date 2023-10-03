import React from 'react';
import styles from './Timeline.module.css'

function Timeline(props) {
  return (
    <section className={styles.timeline__grid} aria-label='схема разработки проекта'>
      <p className={styles.timeline__line1}>1 неделя</p>
      <p className={styles.timeline__line2}>4 недели</p>
      <p className={styles.timeline__subtitle1}>Back-end</p>
      <p className={styles.timeline__subtitle2}>Front-end</p>
    </section>
  );
}

export default Timeline;

