import React from 'react';
import styles from './SubmitButton.module.css';

function SubmitButton(props) {
  const { text, onClick, isValid, message, error } = props;

  return (
    <div className={styles.submitBlock}>
    <span className={`${styles.submitBlock__text} ${error && styles.submitBlock__text_error}`}>{message}</span>
      <input
        className={`${styles.submitBlock__button} ${
          !isValid && styles.submitBlock__button_disabled
        }`}
        disabled={!isValid}
        type="submit"
        value={text}
        onClick={onClick}
      />
    </div>
  );
}

export default SubmitButton;
