import React, { useEffect, useRef, useState } from "react"
import 'bulma/css/bulma.css'
import './css/App.css';
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Porfolio'
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';

import en from './languages/en.json';
import fr from './languages/fr.json';

setTranslations({ en, fr });
setDefaultLanguage('en');
setLanguageCookie();

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    window.pageYOffset > window.innerHeight - 70
      ? setSticky(true)
      : setSticky(false)
  }

  const debounce = (func, wait = 5, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  window.addEventListener("scroll", debounce(handleScroll))


  return (<div class="monPortfolio">
    {/* Barre de navigation */}
    <NavBar sticky={isSticky}/>

    {/* Baniere */}
    <div class="block">
      <div class="banner">
        <img src={"./bg3.jpg"} alt="Un ordinateur semi ouvert avec de la couleur" class="banner-image"/>
        <div class="banner-content">
          <h1 class="title is-1">Loan AUBERGEON</h1>
          <div class="centered line"></div>
          <h2 class="subtitle">Software Engineer</h2>
        </div>
      </div>
    </div>
    
    {/* A PROPOS */}
    <div class="block" id="about">
      <h2 class="subtitle heading-site">A Propos</h2>
      <div class="centered section-line"></div>
      <About/>
      <div style={{height:"30px"}}/>
    </div>

    {/* Expériences */}
    <div class="block" id="skills">
      <div class="skills greybackground">
        <h2 class="subtitle heading-site">compétences</h2>
        <div class="centered section-line"></div>
        <Skills/>
        <div style={{height:"60px"}}/>
      </div>
    </div>

    <div class="block" id="exp">
      <h2 class="subtitle heading-site">experiences</h2>
      <div class="centered section-line"></div>
      <div class="container is-primary">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">

            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <Experience 
                    title="Ingénieur"
                    years="2020"
                    duration="Poste actuel"
                    logo="./logo_thales.jpg"
                    content="zrr fz rfr f zr f ze fz e fz e f z ef  e zefzef e fzekfzeof zz pz jzp"
                  />

                  <Experience 
                    title="Ingénieur"
                    years="2020"
                    duration="6mois"
                    logo="./logo_thales.jpg"
                    content="zrr fz rfr f zr f ze fz e fz e f z ef  e zefzef e fzekfzeof zz pz jzp"
                  />

                  <Experience 
                    title="Stage - Développement mobile"
                    years="2017"
                    duration="6mois"
                    logo="././logo_UM.png"
                    content="zrr fz rfr f zr f ze fz e fz e f z ef  e zefzef e fzekfzeof zz pz jzp"
                  />

                  <Experience 
                    title="Développeur web"
                    years="2010"
                    duration="16mois"
                    logo="./bg.jpg"
                    content="zrr fz rfr f zr f ze fz e fz e f z ef  e zefzef e fzekfzeof zz pz jzp"
                  />
                  <div style={{height:"60px"}}/>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Porfolio */}
    <div class="block greybackground" id="porfolio">
      <h2 class="subtitle heading-site">Portfolio</h2>
      <div class="centered section-line"></div>
      <Portfolio/>
    </div>

    {/* Formulaire de contact */}
    <Contact id="contact"/>

  </div>)
}

export default translate(App);
