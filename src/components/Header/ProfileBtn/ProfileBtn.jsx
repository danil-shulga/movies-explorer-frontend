import React from 'react';
import styles from './ProfileBtn.module.css'
import { Link } from 'react-router-dom';

function ProfileBtn(props) {
  return (
    <Link className={`${styles.profile} ${props.className}`} to='/profile'>
      <span className={styles.profile__text}>{props.children}</span>
      <div className={`${styles.profile__icon} ${props.light && styles.profile__icon_light}`}></div>
    </Link>
  );
}

export default ProfileBtn;
