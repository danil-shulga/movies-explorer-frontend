import React from 'react';
import styles from './NavTab.module.css'

function NavTab(props) {
  return (
    <div className={styles.navTab}>
      <nav className={styles.navTab__linksBlock}>
        <ul className={styles.navTab__linksList}>
          <li><a href='/#' className={styles.navTab__link}>О проекте</a></li>
          <li><a href='/#' className={styles.navTab__link}>Технологии</a></li>
          <li><a href='/#' className={styles.navTab__link}>Студент</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTab;

