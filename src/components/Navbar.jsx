import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//import LanguageSelector from './LanguageSelector';


const Navbar = ({ sticky }) => (
      <header class={sticky ? "header header-sticky" : "header"}>
        {/* eslint-disable-next-line  */}
        {/* {<a class="header-logo-left">
          <LanguageSelector />
        </a> } */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/loanaubergeon/" class="header-logo"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
        <a href="mailto:laubergeon@gmail.com" class="header-logo"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
        <nav class="header-menu">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#exp">Expériences</a>
          <a href="#porfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </header>
)
export default Navbar
