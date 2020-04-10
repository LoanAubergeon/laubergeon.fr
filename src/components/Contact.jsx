import React from 'react';
import 'bulma/css/bulma.css'
import '../css/App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
  render() {
    return (
    <div className="container">
      <div class="block" id="contact">
        <h2 class="subtitle heading-site">Contact</h2>
        <div class="centered section-line"></div>
        <footer class="footer">
        <div class="column wrapper ">
            <p>
              Une question, un besoin, une envie de travailler ensemble ou simplement envie de discuter ? <br />
              N'hesitez pas en m'envoyer un e-mail via le bouton ci-dessous. 
              A bientôt !
            </p>
            <br />
            <br />
            <br />
        </div>
        <div class="column wrapper ">
          <a href="mailto:laubergeon@gmail.com">
          <button class="button is-large is-link is-light mybutton">Dire bonjour</button>
          </a>
          <br />
          <br />
          <br />
        </div>

          <div class="footer-contact-informations">
            <p>2020 © Loan Aubergeon</p>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faGithub}/>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>)
  }
}

export default Contact
