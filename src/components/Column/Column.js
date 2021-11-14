import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
  };
 
  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon} ><Icon name={icon}/></span></h3>
         
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))} 
  
        <Creator text={settings.cardCreatorText} action={addCard}/> 
        
      </section>
    );
  }
}

export default Column;