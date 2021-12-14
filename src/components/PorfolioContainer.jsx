import React from 'react';
import 'bulma/css/bulma.css';
import '../css/App.css';
import Portfolio from './Porfolio';

class PortfolioContainer extends React.Component {
  render() {
    return (
      <>
        <span class='anchor' id='porfolio'></span>
        <div class='block greybackground'>
          <h2 class='subtitle heading-site'>Portfolio</h2>
          <div class='centered section-line'></div>
          <Portfolio />
        </div>
      </>
    );
  }
}

export default PortfolioContainer;
