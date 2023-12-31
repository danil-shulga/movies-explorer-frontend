import React from 'react';
import styles from './Checkbox.module.css';

function Checkbox(props) {
  const { shortMoviesToggle, setShortMoviesToggle, isValid } = props;

  return (
    <label className={styles.checkbox} htmlFor="checkbox">
      <input
        className={styles.checkbox__input}
        type="checkbox"
        id="checkbox"
        onChange={(evt) => {
          setShortMoviesToggle(evt.target.checked)
        }}
        checked={shortMoviesToggle}
        disabled={!isValid}
      />
      <span className={styles.checkbox__inner}>{props.text}</span>
    </label>
  );
}

export default Checkbox;
