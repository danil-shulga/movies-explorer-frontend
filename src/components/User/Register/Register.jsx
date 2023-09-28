import React from 'react';
import styles from './Register.module.css'
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';

function Register(props) {
  return (
    <PageAuth
    title="Добро пожаловать!"
    navMessage="Уже зарегистрированы?"
    navLinkMessage="Войти"
    navLinkPath="/signin">
    <form className={styles.register__form}>
      <InputBlock label="Имя" />
      <InputBlock label="E-mail" />
      <InputBlock type='password' label="Пароль" />
      <SubmitButton text="Зарегистрироваться" />
    </form>
  </PageAuth>
  );
}

export default Register;
