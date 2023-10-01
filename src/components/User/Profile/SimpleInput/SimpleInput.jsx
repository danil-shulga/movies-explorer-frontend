import React from 'react';
import styles from './SimpleInput.module.css';

function SimpleInput(props) {
  const { label, type, placeholder, name, values, onChange, errors, required, minLength, maxLength } =
    props;

  return (
    <>
      <label
        className={`${styles.simpleInput} ${
          props.nonBorder && styles.simpleInput_nonBorder
        }`}
        htmlFor="">
        {label}
        <input
          className={`${styles.simpleInput__input} ${
            errors[name] && styles.simpleInput__input_error
          }`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={values[name] || ''}
          onChange={onChange}
          autoComplete="off"
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      </label>
      <span className={styles.simpleInput__errorMessage}>{errors[name]}</span>
    </>
  );
}

export default SimpleInput;
