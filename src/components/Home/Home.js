import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';
import Creator from '../Creator/Creator.js';
import {settings , pageContents} from '../../data/dataStore.js';


class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  };
  
 
  render() {
  
    const {lists, addList} = this.props;
    
    return (  
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <Search />
        <Creator text={settings.listCreatorText} action={addList}/>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        
      </main>
    );
  }
}

export default Home;
