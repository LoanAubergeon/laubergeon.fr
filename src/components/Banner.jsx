import React from 'react';
import 'bulma/css/bulma.css';
import '../css/App.css';

class Banner extends React.Component {
  render() {
    return (
      <div class='block'>
        <div class='banner'>
          <img
            src={require('../images/bg3.jpg')}
            alt='Un ordinateur semi ouvert avec de la couleur'
            class='banner-image'
          />
          <div class='banner-content'>
            <h1 class='title is-1'>Loan AUBERGEON</h1>
            <div class='centered line'></div>
            <h2 class='subtitle'>Software engineer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
