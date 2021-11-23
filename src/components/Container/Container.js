import React from 'react';
import styles from './Container.scss';

const Container = props => {
  const {children} = props;

  return (
    <section>
      <div className={styles.component}>{children}</div>
    </section>
  );
};

export default Container;