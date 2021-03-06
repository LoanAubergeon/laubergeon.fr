import React, { useEffect, useState} from "react"
import 'bulma/css/bulma.css'
import './css/App.css';
import './i18n'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Porfolio'
//import { useTranslation } from 'react-i18next'
//import i18n from './i18n'

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

  //const { t } = useTranslation();

  return (<div class="monPortfolio">
    {/* Barre de navigation */}
    <NavBar sticky={isSticky}/>

    {/* Baniere */}
    <div class="block">
      <div class="banner">
        <img src={require('./images/bg3.jpg')} alt="Un ordinateur semi ouvert avec de la couleur" class="banner-image"/>
        <div class="banner-content">
          <h1 class="title is-1">Loan AUBERGEON</h1>
          <div class="centered line"></div>
          <h2 class="subtitle">Software engineer</h2>
        </div>
      </div>
    </div>
    
    {/* A PROPOS */}
    <span class="anchor" id="about"></span>
    <div class="block">
      <h2 class="subtitle heading-site">à Propos</h2>
      <div class="centered section-line"></div>
      <About/>
      <div style={{height:"30px"}}/>
    </div>

    {/* Expériences */}
    <span class="anchor" id="skills"></span>
    <div class="block">
      <div class="skills greybackground">
        <h2 class="subtitle heading-site">compétences</h2>
        <div class="centered section-line"></div>
        <Skills/>
        <div style={{height:"60px"}}/>
      </div>
    </div>

    <span class="anchor" id="exp"></span>
    <div class="block" >
      <h2 class="subtitle heading-site">expériences</h2>
      <div class="centered section-line"></div>
      <div class="container is-primary">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">

            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <Experience 
                    title="Ingénieur développement logiciel"
                    years="2019"
                    duration="Poste actuel"
                    logo={require("./images/logo_thales.jpg")}
                    content="Développement logiciel, utilisation de différents langages, principalement C++ et Javascript, 
                    rédaction et passage de tests en Python, rédaction documentaire. Utilisation de méthodes agiles."
                  />

                  <Experience 
                    title="Apprenti ingénieur développement logiciel"
                    years="2018"
                    duration="1 an"
                    logo={require("./images/logo_thales.jpg")}
                    content="Développement logiciel en C++. Intégré à un projet avec une équipe de 15 personnes."
                  />

                  <Experience 
                    title="Projet de fin d'étude"
                    years="2018/2019"
                    duration="6 mois"
                    logo={require("./images/logo_eseo.jpg")}
                    content="Développement du logiciel d'une station d'acquisition de données embarquée sur un drone mono-hélice.
                    Logiciel développé en C et embarqué sur une STM32. Au sein d'une équipe de 4 personnes."
                  />

                  <Experience 
                    title="Projet système embarqué"
                    years="2018"
                    duration="6 mois"
                    logo={require("./images/logo_eseo.jpg")}
                    content="Projet répondant au besoin d’une entreprise.
                    Développeur Android/Java dans une équipe de 7 personnes.
                    Phases de spécifications, de conception, de réalisation et de test d’un panneau 
                    de démonstration d’un système équipé de capteurs domotiques."
                  />

                  <Experience 
                    title="Stage en développement mobile"
                    years="2017"
                    duration="6 mois"
                    logo={require("./images/logo_UM.png")}
                    content="Conception et développement d’une application mobile de covoiturage quotidien à Malte.
                    Application développée pour les appareils iOS en langage Swift et communiquant avec une base de
                    données par la biais d’un serveur."
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
    <span class="anchor" id="porfolio"></span>
    <div class="block greybackground">
      <h2 class="subtitle heading-site">Portfolio</h2>
      <div class="centered section-line"></div>
      <Portfolio/>
    </div>

    {/* Formulaire de contact */}
    <Contact id="contact"/>
  </div>)
}

export default App;
