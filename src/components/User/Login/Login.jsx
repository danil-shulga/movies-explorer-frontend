import React from 'react';
import styles from './Login.module.css';
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';

function Login(props) {
  return (
    <PageAuth
      title="Рады видеть!"
      navMessage="Ещё не зарегистрированы?"
      navLinkMessage="Регистрация"
      navLinkPath="/signup">
      <form className={styles.login__form}>
        <InputBlock label="E-mail" />
        <InputBlock label="Пароль" />
        <SubmitButton text="Войти" />
      </form>
    </PageAuth>
  );
}

export default Login;
