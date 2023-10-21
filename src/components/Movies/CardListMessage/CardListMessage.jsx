import React from 'react';
import styles from './CardListMessage.module.css'

function CardListMessage(props) {
  return (
    <p className={styles.cardListMessage}>
      {props.text}
    </p>
  );
}

export default CardListMessage;
