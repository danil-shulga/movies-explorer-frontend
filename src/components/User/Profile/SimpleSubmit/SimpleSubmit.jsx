import React from 'react';
import styles from './SimpleSubmit.module.css';

function SimpleSubmit(props) {
  const { text, isValid, onClick } = props;

  return (
    <button
      className={`${styles.simpleSubmit}`}
      type="button"
      value={text}
      onClick={onClick}
    >{text}</button>
  );
}

export default SimpleSubmit;
