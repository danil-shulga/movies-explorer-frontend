import React, { useState } from 'react';
import styles from './Login.module.css';
import PageAuth from '../PageAuth/PageAuth';
import InputBlock from '../PageAuth/InputBlock/InputBlock';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';
import mainApi from '../../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const { setLoggedIn } = props;
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const navigate = useNavigate();
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

  function handleSignInSubmit(e) {
    e.preventDefault();
    mainApi
      .signin(values)
      .then((res) => {
        setServerResponseError(false);
        setServerResponseMessage('Успешный вход в систему');
        setToken(res);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setServerResponseError(true);
        console.error('ошибка логина', err);
        if (err.status === 401)
          setServerResponseMessage('Неверная почта или пароль');
        else setServerResponseMessage('Ошибка при входе в систему');
      });
  }

  return (
    <main className={styles.login__main}>
      <PageAuth
        title="Рады видеть!"
        navMessage="Ещё не зарегистрированы?"
        navLinkMessage="Регистрация"
        navLinkPath="/signup">
        <form className={styles.login__form}>
          <InputBlock
            label="E-mail"
            type="email"
            name="email"
            placeholder="E-mail"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
            values={values}
            onChange={handleChange}
            errors={errors}
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
            required
          />
          <SubmitButton
            text="Войти"
            message={serverResponseMessage}
            error={serverResponseError}
            onClick={(e) => {
              handleSignInSubmit(e);
              resetForm();
            }}
            isValid={isValid}
          />
        </form>
      </PageAuth>
    </main>
  );
}

export default Login;
