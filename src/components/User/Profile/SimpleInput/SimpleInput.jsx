import React, { useContext } from 'react';
import styles from './SimpleInput.module.css';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

function SimpleInput(props) {
  const {
    label,
    type,
    placeholder,
    name,
    values,
    onChange,
    errors,
    required,
    pattern,
    minLength,
    maxLength,
    isDisable
  } = props;

  return (
    <>
      <label
        className={`${styles.simpleInput} ${
          props.nonBorder && styles.simpleInput_nonBorder
        }`}
        htmlFor="">
        {label}
        <input
          className={`${styles.simpleInput__input}`}
          disabled={isDisable}
          type={type}
          placeholder={placeholder}
          name={name}
          value={values[name] || ''}
          onChange={onChange}
          autoComplete="off"
          required={required}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
        />
      </label>
      <span className={styles.simpleInput__errorMessage}>{errors[name]}</span>
    </>
  );
}

export default SimpleInput;
