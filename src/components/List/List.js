import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

const List = props => (
 
  <section className={styles.component}>
    <Container />
    <Hero titleText={props.title} imageUrl={props.image} />
    <div className={styles.description}>{ReactHtmlParser(props.description)}</div>
    <div className={styles.columns}>
      {props.columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
          
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addColumn}/>
    </div>
    
  </section>
    
  
);
List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};
List.defaultProps = {
  description: settings.defaultListDescription,
};
export default List;