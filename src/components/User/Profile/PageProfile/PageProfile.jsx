import React from 'react';
import styles from './PageProfile.module.css'

function PageProfile(props) {
  return (
    <section className={styles.pageProfile}>
      <h2 className={styles.pageProfile__title}>{props.title}</h2>
      {props.children}
    </section>
  );
}

export default PageProfile;
