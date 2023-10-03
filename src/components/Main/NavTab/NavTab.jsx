import React from 'react';
import styles from './NavTab.module.css'

function NavTab(props) {
  return (
    <section className={styles.navTab}>
      <nav className={styles.navTab__linksBlock}>
        <ul className={styles.navTab__linksList}>
          <li><a href='#AboutProject' className={styles.navTab__link}>О проекте</a></li>
          <li><a href='#Techs' className={styles.navTab__link}>Технологии</a></li>
          <li><a href='#Portfolio' className={styles.navTab__link}>Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;

