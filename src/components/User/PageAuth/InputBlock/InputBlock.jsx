import React from 'react';
import styles from './InputBlock.module.css'

function InputBlock(props) {
  return (
    <label className={styles.inputBlock}>
      {props.label}
      <input type={props.type} className={`${styles.inputBlock__input} ${props.error && styles.inputBlock__input_error}`} />
      <span className={`${styles.inputBlock__errorMessage} ${props.error && styles.inputBlock__errorMessage_active}`}>error</span>
    </label>
  );
}

export default InputBlock;
