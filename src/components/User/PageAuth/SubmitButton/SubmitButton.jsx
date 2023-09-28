import React from 'react';
import styles from './SubmitButton.module.css'

function SubmitButton(props) {
  return <input className={styles.submitButton} type="submit" value={props.text} />;
}

export default SubmitButton;
