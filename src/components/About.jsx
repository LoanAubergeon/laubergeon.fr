import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

const About = () => (
    <div class="container about">
    <div class="columns is-vcentered my-columns">
      <div class="column is-3 about-single-element is-offset-1">
        <h3>Résumé</h3>
        <p>
          Je suis Loan Aubergeon, <br/>Ingénieur logiciel à <strong>Nantes</strong>, <br/>
          Passionné par l’innovation et les nouvelles technologies, 
          j'ai été diplômé en septembre 2019 de l'<a href="https://eseo.fr">ESEO</a>. <br/>
          J'ai été Sapeur-Pompier volontaire durant cinq années, ce qui m'a permis d’acquérir des valeurs essentielles selon moi.
          Fan de sport (et surtout de rugby), je pratique la course à pieds.

        </p>
      </div>
      <div class="column is-4 about-single-element ">
      <img src={require("../images/PP2.jpg")} alt="" class="pp-image"/>
      </div>
      <div class="column is-3 about-single-element">
        <h3>Mes intérets</h3>
        <p>
          J'aime m'investir à fond dans les choses qui me passionnent. <br/>
          Au fil des projets et expériences dans l'ingénierie' logicielle, j’ai développé un réel attrait pour le <strong>design</strong> et 
          l'expérience utilisateur, que ce soit pour des applications web, mobiles ou encore pour des visuels telles que des affiches ou 
          présentations. <br/>Je souhaite me perfectionner dans cette voie. 
        </p>
      </div>
    </div>
  </div>
)
export default About

