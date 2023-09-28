import React from 'react';
import styles from './PortfolioLink.module.css'

function PortfolioLink(props) {
  return (
    <a className={`${styles.portfolioLink} ${props.withoutBorder && styles.portfolioLink_withoutBorder}`} href={props.href} target='_blank'>
      <h3 className={styles.portfolioLink__title}>{props.children}</h3>
      <div className={styles.portfolioLink__arrow}></div>
    </a>
  );
}


export default PortfolioLink;
