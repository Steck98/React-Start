
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';


class FAQ extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    
  };
  render() {
    

    return(
      <Container>
    
        <Hero titleText={settings.faqSubPage.title} src={settings.faqSubPage.img}/>
        <h2>{settings.faqSubPage.text}</h2>
      </Container>
    );
  }

}
export default FAQ;