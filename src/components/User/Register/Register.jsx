import React, { useEffect, useState } from 'react';
import styles from './Register.module.css';
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';
import mainApi from '../../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const { setLoggedIn } = props;
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const navigate = useNavigate();
  const [isPendingServerResponse, setIsPendingServerResponse] = useState(false);
  const [serverResponseMessage, setServerResponseMessage] = useState('');
  const [serverResponseError, setServerResponseError] = useState(false);

  function setToken(res) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        token: res.token,
      })
    );
  }

  function handleSignUpSubmit(e) {
    setIsPendingServerResponse(true);
    e.preventDefault();
    mainApi
      .signup(values)
      .then((res) => {
        setServerResponseError(false);
        setServerResponseMessage('Вы успешно зарегистрировались');
        mainApi
          .signin(values)
          .then((res) => {
            setToken(res);
            setLoggedIn(true);
            navigate('/movies');
          })
          .catch((err) =>
            console.error('ошибка логина после регистрации', err)
          );
      })
      .catch((err) => {
        setServerResponseError(true);
        if (err.status === 409)
          setServerResponseMessage('Email уже используется');
        console.error('ошибка регистрации', err);
      })
      .finally(() => setIsPendingServerResponse(false));
  }

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
            name="name"
            placeholder="Name"
            values={values}
            onChange={handleChange}
            errors={errors}
            disabled={isPendingServerResponse}
            required
            minLength={3}
            maxLength={30}
          />
          <InputBlock
            label="E-mail"
            type="email"
            name="email"
            placeholder="E-mail"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
            values={values}
            onChange={handleChange}
            errors={errors}
            disabled={isPendingServerResponse}
            required
          />
          <InputBlock
            label="Пароль"
            type="password"
            name="password"
            placeholder="Password"
            values={values}
            onChange={handleChange}
            errors={errors}
            disabled={isPendingServerResponse}
            required
            minLength={3}
            maxLength={30}
          />
          <SubmitButton
            text="Зарегистрироваться"
            message={serverResponseMessage}
            error={serverResponseError}
            onClick={(e) => {
              handleSignUpSubmit(e);
            }}
            isValid={isValid}
            isPendingServerResponse={isPendingServerResponse}
          />
        </form>
      </PageAuth>
    </main>
  );
}

export default Register;
