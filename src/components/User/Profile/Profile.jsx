import React from 'react';
import Header from '../../Header/Header';
import PageProfile from './PageProfile/PageProfile';
import styles from './Profile.module.css';
import SimpleInput from './SimpleInput/SimpleInput';
import SimpleSubmit from './SimpleSubmit/SimpleSubmit';

function Profile(props) {
  return (
    <>
      <Header {...props} />
      <PageProfile title="Привет, User!">
        <form className={styles.profile__form} action="">
          <SimpleInput label="Имя" placeholder="userName" />
          <SimpleInput label="E-mail" placeholder="userEmail" nonBorder />
          <SimpleSubmit text="Редактировать" />
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
