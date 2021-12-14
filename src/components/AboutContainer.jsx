import React from 'react';
import 'bulma/css/bulma.css';
import '../css/App.css';
import About from './About';

class AboutContainer extends React.Component {
  render() {
    return (
      <>
        <span class='anchor' id='about'></span>
        <div class='block'>
          <h2 class='subtitle heading-site'>à Propos</h2>
          <div class='centered section-line'></div>
          <About />
          <div style={{ height: '30px' }} />
        </div>
      </>
    );
  }
}

export default AboutContainer;
