import React from 'react';
import styles from './PageProfile.module.css'

function PageProfile(props) {
  return (
    <section className={styles.pageProfile}>
      <h1 className={styles.pageProfile__title}>{props.title}</h1>
      {props.children}
    </section>
  );
}

export default PageProfile;
