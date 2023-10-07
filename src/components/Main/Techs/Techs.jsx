import React from 'react';
import Section from '../Section/Section';
import styles from './Techs.module.css';

function Techs(props) {
  return (
    <>
      <Section className={styles.techs} id="Techs" title="Технологии">
        <h3 className={styles.techs__title}>7 технологий</h3>
        <p className={styles.techs__paragraph}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className={styles.techs__list}>
          <li className={styles.techs__item}>HTML</li>
          <li className={styles.techs__item}>CSS</li>
          <li className={styles.techs__item}>JS</li>
          <li className={styles.techs__item}>React</li>
          <li className={styles.techs__item}>Git</li>
          <li className={styles.techs__item}>Express.js</li>
          <li className={styles.techs__item}>mongoDB</li>
        </ul>
      </Section>
    </>
  );
}

export default Techs;
