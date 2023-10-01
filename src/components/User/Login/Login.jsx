import React from 'react';
import styles from './Login.module.css';
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  return (
    <PageAuth
      title="Рады видеть!"
      navMessage="Ещё не зарегистрированы?"
      navLinkMessage="Регистрация"
      navLinkPath="/signup">
      <form className={styles.login__form}>
        <InputBlock
          label="E-mail"
          type="email"
          name="userEmail"
          values={values}
          onChange={handleChange}
          errors={errors}
          required
        />
        <InputBlock
          label="Пароль"
          type="password"
          name="userPassword"
          values={values}
          onChange={handleChange}
          errors={errors}
          required
        />
        <SubmitButton text="Войти" onClick={resetForm} isValid={isValid} />
      </form>
    </PageAuth>
  );
}

export default Login;
