import React from 'react';
import styles from './TextBlock.module.css'

function TextBlock(props) {
  const {title, paragraph} = props
  return (
    <>
      <h3 className={styles.textBlock__title}>{title}</h3>
      <p className={styles.textBlock__paragraph}>{paragraph}</p>
    </>
  );
}

export default TextBlock;

