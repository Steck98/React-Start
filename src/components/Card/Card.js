import React from 'react';

import styles from './Card.scss';

class Card extends React.Component {
  
  
  render() {
    return (
      <section>
        <div className={styles.component}>{this.props.title}</div>
      </section>
    );
  }
}
export default Card;