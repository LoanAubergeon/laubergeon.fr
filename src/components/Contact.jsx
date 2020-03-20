import React from 'react';
import 'bulma/css/bulma.css'
import '../css/App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
  render() {
    return (<div className="container">
      <div class="block" id="contact">
        <h2 class="subtitle heading-site">Contact</h2>
        <footer class="footer">
          <div class="footer-contact-form">
            <form>
              <div class="field">
                <label class="label">Votre nom</label>
                <div class="control">
                  <input class="input" type="text" placeholder="e.g Chirac"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Votre prénom</label>
                <div class="control">
                  <input class="input" type="text" placeholder="e.g Jacques"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Votre email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="e.g jacque.chirac@president.fr"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Votre message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Comment puis-je vous aider"/>
                </div>
              </div>
            </form>
            <button class="button is-link">
              Envoyer
            </button>
          </div>

          <div class="footer-contact-informations">
            <p>2019 © Loan Aubergeon</p>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faLinkedin}/>
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
