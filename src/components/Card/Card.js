import React from 'react';

import styles from './Card.scss';

class Card extends React.Component {
  
  
  render() {
    const {title}= this.props;
    return (
      <section>
        <div className={styles.component}>{title}</div>
      </section>
    );
  }
}
export default Card;