import React from 'react';
import styles from './SimpleSubmit.module.css'

function SimpleSubmit(props) {
  return (
    <input className={styles.simpleSubmit} type='submit' value={props.text} />
  );
}

export default SimpleSubmit;
