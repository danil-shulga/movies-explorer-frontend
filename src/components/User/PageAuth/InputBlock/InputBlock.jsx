import React from 'react';
import styles from './InputBlock.module.css';

function InputBlock(props) {
  const { label, type, name, values, onChange, errors, required, minLength, maxLength, placeholder } = props;

  return (
    <label className={styles.inputBlock}>
      {label}
      <input
        type={type}
        name={name}
        value={values[name] || ''}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}

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
