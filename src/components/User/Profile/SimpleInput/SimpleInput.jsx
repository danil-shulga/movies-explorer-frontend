import React from 'react';
import styles from './SimpleInput.module.css';

function SimpleInput(props) {
  return (
    <label className={`${styles.simpleInput} ${props.nonBorder && styles.simpleInput_nonBorder}`} htmlFor="">
      {props.label}
      <input className={styles.simpleInput__input} type="text" placeholder={props.placeholder} />
      <span></span>
    </label>
  );
}

export default SimpleInput;
