import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';

const About = () => (
    <div class="container about">
    <div class="columns is-vcentered my-columns">
      <div class="column is-3 about-single-element is-offset-1">
        <h3>Résumé</h3>
        <p>
          Je suis Loan Aubergeon, ingénieur logiciel basé à <strong>Nantes</strong>. <br/>
          Passionné par l’innovation et les nouvelles technologies, 
          j'ai été obtenu en septembre un diplôme d'ingénieur généraliste à l'<a href="https://eseo.fr">ESEO</a> à Angers. <br/>
          Fan de sport (et surtout de rugby), je pratique la course à pieds. 

        </p>
      </div>
      <div class="column is-4 about-single-element ">
      <img src={require("../images/PP2.jpg")} alt="" class="pp-image"/>
      </div>
      <div class="column is-3 about-single-element">
        <h3>Mes intérets</h3>
        <p>
          Mes cinq années en tant que Sapeur-Pompier volontaire m’ont permis d’acquérir et des valeurs essentiels selon moi.
          J'aime m'investir à fond dans les choses qui me passionnent.
          Au fil des projets et expériences dans le domaine du logiciel, j’ai développé un réel attrait pour le <strong>design</strong> d’application en
          général et <strong>l'expérience utilisateur</strong>. Je souhaite me perfectionner dans cette voie. 
        </p>
      </div>
    </div>
  </div>
)
export default About

