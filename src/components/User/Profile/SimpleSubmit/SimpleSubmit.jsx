import React from 'react';
import styles from './SimpleSubmit.module.css';

function SimpleSubmit(props) {
  const { text, isValid, onClick } = props;

  return (
    <input
      className={`${styles.simpleSubmit} ${
        !isValid && styles.simpleSubmit_disabled
      }`}
      type="submit"
      value={text}
      disabled={!isValid}
    />
  );
}

export default SimpleSubmit;
