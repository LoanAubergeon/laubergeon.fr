import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import Contact from './Contact'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faCoffee, faPen} from '@fortawesome/free-solid-svg-icons'
import {faReact, faJava, faLinux, faSwift} from '@fortawesome/free-brands-svg-icons'

function App() {
  return (<div class="monPortfolio">
    <div class="block">
      <header class="header">
        <a href="#" class="header-logo">
          Loan Aubergeon
        </a>
        <nav class="header-menu">
          <a href="#">Accueil</a>
          <a href="#abouts">A propos</a>
          <a href="#exp">Experiences</a>
          <a href="#porfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>

    <div class="block">
      <div class="banner">
        <img src={"./bg3.jpg"} alt="Un ordinateur avec un café et un bloc note" class="banner-image"/>
        <div class="banner-content">
          <h1 class="title is-1">Loan Aubergeon</h1>
          <h2 class="subtitle">Software Engineer</h2>
          <h3 class="subtitle"></h3>
          <button class="button is-link">Contactez moi</button>
        </div>

      </div>
    </div>

    <div class="block" id="about">
      <h2 class="subtitle heading-site">About</h2>
      <div class="container about">
        <div class="columns">
          <div class="column about-single-element my-column">
            <FontAwesomeIcon className="icon" icon={faCode}/>
            <p>
              Salut efiqze ẑefz oefkoz ke kefko zkefkoz eok kozeko fkzek fkzek fkzekf kzke fokzoeo fozek fke zk
            </p>
          </div>
          <div class="column about-single-element my-column">
            <FontAwesomeIcon className="icon" icon={faCoffee}/>
            <p>
              Salut efiqze ẑefz oefkoz ke k zefzefzef zef ze ze fefko zkefkoz eok kozeko fkzek fkzek f zefze fze z e zekzekf kzke fokzoeo fozek fke zk
            </p>
          </div>
          <div class="column about-single-element my-column">
            <FontAwesomeIcon className="icon" icon={faPen}/>
            <p>
              Salut efiqze ẑefz oefkoz ke kefko zkefkoczcz e zef ze fze f efze z eok kozeko fkzek fkzek fkzekf kzke fokzoeo fozek fke zk
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="block" id="skills">
      <div class="skills">
        <h2 class="subtitle heading-site">Skills</h2>
        <div class="container about">

          <div class="columns is-vcentered my-columns">

            <div class="column is-1 my-column my-icon is-offset-2">
              <FontAwesomeIcon className="icon" icon={faCode}/>
            </div>
            <div class="column is-5 my-column">
              <progress class="progress is-medium my-progress" value="15" max="100"></progress>
            </div>
            <div class="column is-1 my-column">
              <p>C/C++</p>
            </div>

          </div>
          <div class="columns is-vcentered my-columns">

            <div class="column is-1 my-column my-icon is-offset-2 ">
              <FontAwesomeIcon className="icon" icon={faJava}/>
            </div>
            <div class="column is-5 my-column">
              <progress class="progress is-medium my-progress" value="68" max="100"></progress>
            </div>
            <div class="column is-1 my-column">
              <p>Java</p>
            </div>

          </div>
          <div class="columns is-vcentered my-columns">

            <div class="column is-1 my-column my-icon is-offset-2">
              <FontAwesomeIcon className="icon" icon={faReact}/>
            </div>
            <div class="column is-5 my-column">
              <progress class="progress is-medium my-progress" value="50" max="100"></progress>
            </div>
            <div class="column is-1 my-column">
              <p>Javascript</p>
            </div>

          </div>
          <div class="columns is-vcentered my-columns">

            <div class="column is-1 my-column my-icon is-offset-2">
              <FontAwesomeIcon className="icon" icon={faSwift}/>
            </div>
            <div class="column is-5 my-column">
              <progress class="progress is-medium my-progress" value="25" max="100"></progress>
            </div>
            <div class="column is-1 my-column">
              <p>Swift / iOS</p>
            </div>

          </div>
          <div class="columns is-vcentered my-columns">

            <div class="column is-1 my-column my-icon is-offset-2">
              <FontAwesomeIcon className="icon" icon={faLinux}/>
            </div>
            <div class="column is-5 my-column">
              <progress class="progress is-medium my-progress" value="60" max="100"></progress>
            </div>
            <div class="column is-1 my-column">
              <p>Linux</p>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="block" id="exp">
      <h2 class="subtitle heading-site">Mes experiences</h2>
      <div class="container is-primary">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">

            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child">

                  <div class="notification">
                    <div class="columns">
                      <div class="column is-1">
                        <img src={"./logo_thales.jpg"} alt="" class="banner-image"/>
                      </div>
                      <div class="column is-11">
                        <h1 class="subtitle">Ingénieur développement logiciel - 2019</h1>
                        zazerqzfazfa ze rze raze azer zer azrcazeczECc zE Ze
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child">

                  <div class="notification">
                    <div class="columns">
                      <div class="column is-1">
                        <img src={"./logo_UM.png"} alt="" class="banner-image"/>
                      </div>
                      <div class="column is-11">
                        <h1 class="subtitle">Stage - Développement mobile - 2017 - 6 mois</h1>
                        Réalisation d’une application mobile de covoiturage quotidien à Malte. Application développée pour les appareils iOS en langage Swift et communiquant avec une base de données par la biais d’un serveur.
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child">
                  <div class="notification">
                    <div class="columns">
                      <div class="column is-1">
                        <img src={"./bg.jpg"} alt="" class="banner-image"/>
                      </div>
                      <div class="column is-11">
                        <h1 class="subtitle">Développeur web</h1>
                        zazerqzfazfa ze rze raze azer zer azrcazeczECc zE Ze
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Porfolio */}
    <div class="block" id="porfolio">
      <h2 class="subtitle heading-site">Mon Portfolio</h2>
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">

              <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                  <div class="notification">zazerqzfazfa ze rze raze azer zer azr</div>
                </article>
                <article class="tile is-child">
                  <img src={"./bg.jpg"} alt="Un ordinateur avec un café et un bloc note" class="banner-image"/>
                </article>
              </div>

              <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                  <div class="notification is-primary">
                    <div class="COLORED">100x100</div>
                  </div>
                </article>
              </div>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child">
                <img src={"./bg.jpg"} alt="Un ordinateur avec un café et un bloc note" class="banner-image"/>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child">
              <div class="notification is-warning">
                zazerqzfazfa ze rze raze azer zer azr
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    {/* Formulaire de contact */}
    <Contact id="contact"/>

  </div>)
}

export default App;
