import React from 'react';
import Section from '../Section/Section';
import styles from './Portfolio.module.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';
import { Link } from 'react-router-dom';

function Portfolio(props) {
  return (
    <>
      <Section id="Portfolio" title="Студент" className={styles.portfolio}>
        <div className={styles.portfolio__grid}>
          <div className={styles.portfolio__textBlock}>
            <p className={styles.portfolio__name}>Виталий</p>
            <h3 className={styles.portfolio__title}>
              Фронтенд-разработчик, 30 лет
            </h3>
            <p className={styles.portfolio__about}>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/danil-shulga"
              target="_blank"
              className={styles.portfolio__github}>
              GitHub
            </a>
          </div>
          <img
            className={styles.portfolio__img}
            src={require('../../../images/profile-photo.png')}
            alt="фото студента"
          />
        </div>

        <ul className={styles.portfolio__list}>
          Портфолио
          <li className={styles.portfolio__listItem}>
            <PortfolioLink href="https://github.com/danil-shulga/how-to-learn">
              Статичный сайт
            </PortfolioLink>
          </li>
          <li className={styles.portfolio__listItem}>
            <PortfolioLink href="https://github.com/danil-shulga/russian-travel">
              Адаптивный сайт
            </PortfolioLink>
          </li>
          <li className={styles.portfolio__listItem}>
            <PortfolioLink href="https://github.com/danil-shulga/react-mesto-api-full-gha" withoutBorder>
              Одностраничное приложение
            </PortfolioLink>
          </li>
        </ul>
      </Section>
    </>
  );
}

export default Portfolio;
