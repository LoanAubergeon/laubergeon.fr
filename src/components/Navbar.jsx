import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

const Navbar = ({ sticky }) => (
      <header class={sticky ? "header header-sticky" : "header"}>
        {/* <a href="#" class="header-logo">Loan Aubergeon</a> */}
        <nav class="header-menu">
          <a href="#abouts">A propos</a>
          <a href="#abouts">Education</a>
          <a href="#porfolio">Skills</a>
          <a href="#exp">Experiences</a>
          <a href="#porfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
)
export default Navbar