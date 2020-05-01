import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

// import Announcement from 'react-announcement'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const displayNotification = () => {
//   return (
//     <Announcement
//           title="Here is your component"
//           subtitle="The best announcement component for React is finally here. Install it in all your projects."
//           link="https://github.com/kristofferandreasen/react-announcement"
//           //imageSource={Logo}
//           daysToLive={3}
//           secondsBeforeBannerShows={1}
//           closeIconSize={30}
//       />
//   )
// }

const Navbar = ({ sticky }) => (
      <header class={sticky ? "header header-sticky" : "header"}>
        {/* <a class="header-logo-left" onClick={displayNotification}>
          <span role="img" aria-labelledby="englishflag">🇬🇧</span>
        </a> */}
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
