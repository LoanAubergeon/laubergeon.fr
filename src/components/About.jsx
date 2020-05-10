import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

const About = () => (
    <div class="container about">
    <div class="columns is-vcentered my-columns">
      <div class="column is-3 about-single-element is-offset-1">
        <h3>Résumé</h3>
        <p>
          Je suis Loan Aubergeon, ingénieur logiciel à <strong>Nantes</strong>, <br/>
          Passionné par l’innovation et les nouvelles technologies, 
          j'ai été diplômé en septembre 2019 de l'<a href="https://eseo.fr">ESEO</a>. <br/>
          J'ai été Sapeur-Pompier volontaire durant cinq années, ce qui m'a permis d’acquérir des valeurs essentielles selon moi.
          Fan de sport (et surtout de rugby), je pratique la course à pieds.

        </p>
      </div>
      <div class="column is-4 about-single-element ">
      <img src={require("../images/PP3.JPG")} alt="" class="pp-image"/>
      </div>
      <div class="column is-3 about-single-element">
        <h3>Mes intérets</h3>
        <p>
          J'aime m'investir à fond dans les choses qui me passionnent. <br/>
          Au fil de mes expériences, j’ai développé un réel attrait pour le <strong>design d'interface</strong> et 
          <strong> l'expérience utilisateur</strong>, que ce soit pour des applications web, mobiles ou autres visuels telles que des affiches ou 
          présentations. Je souhaite m'améliorer dans cette voie. 
        </p>
      </div>
    </div>
  </div>
)
export default About

