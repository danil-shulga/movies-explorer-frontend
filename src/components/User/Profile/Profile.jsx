import React from 'react';
import Header from '../../Header/Header';
import PageProfile from './PageProfile/PageProfile';
import styles from './Profile.module.css';
import SimpleInput from './SimpleInput/SimpleInput';
import SimpleSubmit from './SimpleSubmit/SimpleSubmit';
import useFormAndValidation from '../../../hooks/useFormAndInputValidation';

function Profile(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  return (
    <>
      <Header {...props} />
      <PageProfile title="Привет, User!">
        <form className={styles.profile__form} action="">
          <SimpleInput
            label="Имя"
            placeholder="userName"
            type="text"
            name="userName"
            values={values}
            onChange={handleChange}
            errors={errors}
            required
            minLength={3}
            maxLength={30}
          />
          <SimpleInput
            label="E-mail"
            placeholder="userEmail"
            name="userEmail"
            values={values}
            onChange={handleChange}
            errors={errors}
            required
            minLength={3}
            maxLength={30}
            nonBorder
          />
          <SimpleSubmit text="Редактировать" isValid={isValid} onClick={resetForm} />
        </form>
        <p className={styles.profile__nav}>
          <a className={styles.profile__navLink} href="/#">
            Выйти из аккаунта
          </a>
        </p>
      </PageProfile>
    </>
  );
}

export default Profile;
