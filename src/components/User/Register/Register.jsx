import React from 'react';
import styles from './Register.module.css';
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  return (
    <main className={styles.register__main}>
      <PageAuth
        title="Добро пожаловать!"
        navMessage="Уже зарегистрированы?"
        navLinkMessage="Войти"
        navLinkPath="/signin">
        <form className={styles.register__form}>
          <InputBlock
            label="Имя"
            type="text"
            name="userName"
            placeholder="Name"
            values={values}
            onChange={handleChange}
            errors={errors}
            required
            minLength={3}
            maxLength={30}
          />
          <InputBlock
            label="E-mail"
            type="email"
            name="userEmail"
            placeholder="E-mail"
            values={values}
            onChange={handleChange}
            errors={errors}
            required
          />
          <InputBlock
            label="Пароль"
            type="password"
            name="userPassword"
            placeholder="Password"
            values={values}
            onChange={handleChange}
            errors={errors}
            required
            minLength={3}
            maxLength={30}
          />
          <SubmitButton
            text="Зарегистрироваться"
            onClick={resetForm}
            isValid={isValid}
          />
        </form>
      </PageAuth>
    </main>
  );
}

export default Register;
