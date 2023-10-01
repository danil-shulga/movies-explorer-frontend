import React from 'react';
import styles from './SubmitButton.module.css';

function SubmitButton(props) {
  const { text, onClick, isValid } = props;

  return (
    <input
      className={`${styles.submitButton} ${
        !isValid && styles.submitButton_disabled
      }`}
      disabled={!isValid}
      type="submit"
      value={text}
      onClick={onClick}
    />
  );
}

export default SubmitButton;
