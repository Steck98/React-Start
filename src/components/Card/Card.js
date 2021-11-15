import React from 'react';
import styles from './Card.scss';

const Card = props=> (
  <section>
    <div className={styles.component}>{props.title}</div>
  </section>
);
  

export default Card;