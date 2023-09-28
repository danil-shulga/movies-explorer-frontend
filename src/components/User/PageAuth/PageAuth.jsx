import React from 'react';
import styles from './PageAuth.module.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function PageAuth(props) {
  return (
    <section className={styles.pageAuth}>
      <div className={styles.pageAuth__contentWrapper}>
        <Link className={styles.pageAuth__img} to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <h2 className={styles.pageAuth__title}>{props.title}</h2>
        {props.children}
      </div>
      <p className={styles.pageAuth__nav}>
        {props.navMessage}
        <Link
          className={`${styles.pageAuth__nav} ${styles.pageAuth__nav_link}`}
          to={props.navLinkPath}>
          {props.navLinkMessage}
        </Link>
      </p>
    </section>
  );
}

export default PageAuth;
