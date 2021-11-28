import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';


class Info extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    
  };
  render() {
    

    return(
      <Container>
    
        <Hero titleText={settings.infoSubPage.title}/>
        <h2>{settings.infoSubPage.text}</h2>
      </Container>
    );
  }

}
export default Info;