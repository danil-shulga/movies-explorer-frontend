import React from 'react';
import styles from './AboutProject.module.css';
import TextBlock from './TextBlock/TextBlock';
import Timeline from './Timeline/Timeline';
import Section from '../Section/Section';

function AboutProject(props) {
  return (
    <>
      <Section className={styles.aboutProject} title="О проекте">
        <div className={styles.aboutProject__grid}>
          <div className={styles.aboutProject__textBlock1}>
            <TextBlock
              title="Дипломный проект включал 5 этапов"
              paragraph="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."></TextBlock>
          </div>
          <div className={styles.aboutProject__textBlock2}>
            <TextBlock
              title="На выполнение диплома ушло 5 недель"
              paragraph="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."></TextBlock>
          </div>
          <div className={styles.aboutProject__timeline}>
            <Timeline />
          </div>
        </div>
      </Section>
    </>
  );
}

export default AboutProject;
