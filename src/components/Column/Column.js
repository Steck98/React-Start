import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

const Column = props => (
    
    
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title}<span className={styles.icon} ><Icon name={props.icon}/></span></h3>       
    {props.cards.map(cardData => (
      <Card key={cardData.id} {...cardData} />
    ))} 
    <Creator text={settings.cardCreatorText} action={props.addCard}/> 
  </section>
);
Column.defaultProps = {
  icon: settings.defaultColumnIcon, 
};
Column.propTypes = {
  title: PropTypes.node.isRequired,
  cards: PropTypes.array.isRequired,
  addCard: PropTypes.func,
};



export default Column;