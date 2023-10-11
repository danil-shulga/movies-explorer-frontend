import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Header/Header';
import PageProfile from './PageProfile/PageProfile';
import styles from './Profile.module.css';
import SimpleInput from './SimpleInput/SimpleInput';
import SimpleSubmit from './SimpleSubmit/SimpleSubmit';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import mainApi from '../../../utils/MainApi';
import SubmitButton from '../PageAuth/SubmitButton/SubmitButton';

function Profile(props) {
  const { setLoggedIn } = props;
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const JWT = JSON.parse(localStorage.getItem('user'))?.token;
  const [isDisable, setIsDisable] = useState(true);
  const [isDifferent, setIsDifferent] = useState(false);
  const [serverResponseMessage, setServerResponseMessage] = useState('')
  const [serverResponseError, setServerResponseError] = useState(false)

  // присвоение начальны значений для Name и Email
  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [serverResponseMessage]);

  // сравнение начальных и текущих значений
  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsDifferent(false);
    } else setIsDifferent(true);
  }, [values, currentUser]);

  function handlePatchUserSubmit(e) {
    e.preventDefault();
    mainApi
      .patchUserInfo(values, JWT)
      .then((res) => {
        setCurrentUser(res);
        setServerResponseError(false)
        setServerResponseMessage('данные изменены')
        resetForm();
      })
      .catch((err) => {
        console.error('ошибка редактирования профиля', err);
        setServerResponseError(true)
        if (err.status >= 400) setServerResponseMessage(`Email: ${values.email} уже используется`)
        else setServerResponseMessage(`при обновлении данных произошла ошибка`)
        resetForm();
      });
  }

  return (
    <>
      <Header {...props} />
      <main className={styles.profile__main}>
        <PageProfile title={`Привет, ${currentUser.name || 'user'}!`}>
          <form className={styles.profile__form}>
            <SimpleInput
              label="Имя"
              placeholder='Name'
              type="text"
              name="name"
              isDisable={isDisable}
              values={values}
              onChange={handleChange}
              errors={errors}
              required
              minLength={3}
              maxLength={30}
            />
            <SimpleInput
              label="E-mail"
              placeholder="Email"
              type="email"
              name="email"
              isDisable={isDisable}
              values={values}
              onChange={handleChange}
              errors={errors}
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
              minLength={3}
              maxLength={30}
              nonBorder
            />
            {isDisable ? (
              <SimpleSubmit
                text="Редактировать"
                onClick={(e) => {
                  setIsDisable(false);
                }}
                isValid={isValid}
              />
            ) : (
              <SubmitButton
                text="Сохранить"
                message={serverResponseMessage}
                error={serverResponseError}
                onClick={(e) => {
                  handlePatchUserSubmit(e);
                  resetForm();
                }}
                isValid={isValid && isDifferent}
              />
            )}
          </form>
          <p className={styles.profile__nav}>
            <Link
              className={styles.profile__navLink}
              onClick={() => {
                localStorage.removeItem('user');
                setLoggedIn(false);
                setCurrentUser({});
              }}
              to="/signin">
              Выйти из аккаунта
            </Link>
          </p>
        </PageProfile>
      </main>
    </>
  );
}

export default Profile;
