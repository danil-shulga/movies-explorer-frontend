import React from 'react';
import styles from './Timeline.module.css'

function Timeline(props) {
  return (
    <div className={styles.timeline__grid}>
      <div className={styles.timeline__line1}>1 неделя</div>
      <div className={styles.timeline__line2}>4 недели</div>
      <div className={styles.timeline__subtitle1}>Back-end</div>
      <div className={styles.timeline__subtitle2}>Front-end</div>
    </div>
  );
}

export default Timeline;

