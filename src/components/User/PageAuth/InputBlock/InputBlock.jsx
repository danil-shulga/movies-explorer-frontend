import React from 'react';
import styles from './InputBlock.module.css';

function InputBlock(props) {
  const { label, type, name, values, pattern, onChange, errors, required, minLength, maxLength, placeholder, disabled } = props;

  return (
    <label className={styles.inputBlock}>
      {label}
      <input
        type={type}
        name={name}
        value={values[name] || ''}
        pattern={pattern}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}

        className={`${styles.inputBlock__input} ${
          errors[name] && styles.inputBlock__input_error
        }`}
      />
      <span
        className={`${styles.inputBlock__errorMessage} ${
          errors[name] && styles.inputBlock__errorMessage_active
        }`}>
        {errors[name]}
      </span>
    </label>
  );
}

export default InputBlock;
