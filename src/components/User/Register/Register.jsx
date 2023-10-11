import React, { useEffect } from 'react';
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

  function setToken(res) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        token: res.token,
      })
    );
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    console.log(values);
    mainApi
      .signup(values)
      .then((res) => {
        console.log(res);
        mainApi
          .signin(values)
          .then((res) => {
            setToken(res);
            setLoggedIn(true);
            navigate('/movies');
            console.log(res);
          })
          .catch((err) => console.error("ошибка логина после регистрации", err ));
      })
      .catch((err) => console.log("ошибка регистрации", err ));
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
            required
            minLength={3}
            maxLength={30}
          />
          <InputBlock
            label="E-mail"
            type="email"
            name="email"
            placeholder="E-mail"
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
            minLength={3}
            maxLength={30}
          />
          <SubmitButton
            text="Зарегистрироваться"
            onClick={(e) => {
              handleSignUpSubmit(e);
              resetForm();
            }}
            isValid={isValid}
          />
        </form>
      </PageAuth>
    </main>
  );
}

export default Register;
