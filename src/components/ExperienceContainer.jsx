import React from 'react';
import 'bulma/css/bulma.css';
import '../css/App.css';
import Experience from './Experience';
import Skills from './Skills';
const logo_thales = require('../images/logo_thales.jpg');
const logo_eseo = require('../images/logo_eseo.jpg');
const logo_um = require('../images/logo_UM.png');

class ExperienceContainer extends React.Component {
  render() {
    return (
      <>
        <span class='anchor' id='skills'></span>
        <div class='block'>
          <div class='skills greybackground'>
            <h2 class='subtitle heading-site'>compétences</h2>
            <div class='centered section-line'></div>
            <Skills />
            <div style={{ height: '60px' }} />
          </div>
        </div>

        <span class='anchor' id='exp'></span>
        <div class='block'>
          <h2 class='subtitle heading-site'>expériences</h2>
          <div class='centered section-line'></div>
          <div class='container is-primary'>
            <div class='tile is-ancestor'>
              <div class='tile is-vertical is-12'>
                <div class='tile'>
                  <div class='tile is-parent'>
                    <article class='tile is-child'>
                      <Experience
                        title='Ingénieur développement logiciel'
                        years='2019'
                        duration='Poste actuel'
                        logo={logo_thales}
                        content='Développement logiciel, utilisation de différents langages, principalement C++ et Javascript, 
                    rédaction et passage de tests en Python, rédaction documentaire. Utilisation de méthodes agiles.'
                      />

                      <Experience
                        title='Apprenti ingénieur développement logiciel'
                        years='2018'
                        duration='1 an'
                        logo={logo_thales}
                        content='Développement logiciel en C++. Intégré à un projet avec une équipe de 15 personnes.'
                      />

                      <Experience
                        title="Projet de fin d'étude"
                        years='2018/2019'
                        duration='6 mois'
                        logo={logo_eseo}
                        content="Développement du logiciel d'une station d'acquisition de données embarquée sur un drone mono-hélice.
                    Logiciel développé en C et embarqué sur une STM32. Au sein d'une équipe de 4 personnes."
                      />

                      <Experience
                        title='Projet système embarqué'
                        years='2018'
                        duration='6 mois'
                        logo={logo_eseo}
                        content='Projet répondant au besoin d’une entreprise.
                    Développeur Android/Java dans une équipe de 7 personnes.
                    Phases de spécifications, de conception, de réalisation et de test d’un panneau 
                    de démonstration d’un système équipé de capteurs domotiques.'
                      />

                      <Experience
                        title='Stage en développement mobile'
                        years='2017'
                        duration='6 mois'
                        logo={logo_um}
                        content='Conception et développement d’une application mobile de covoiturage quotidien à Malte.
                    Application développée pour les appareils iOS en langage Swift et communiquant avec une base de
                    données par la biais d’un serveur.'
                      />
                      <div style={{ height: '60px' }} />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExperienceContainer;
