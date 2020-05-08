import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';
import Skill from './Skill'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faReact, faPython} from '@fortawesome/free-brands-svg-icons'


const Skills = () => (
    <div class="container skills">
        <div class="columns my-columns">
            <Skill title="C++" logo={faCode}/>
            <Skill title="React" logo={faReact}/>
            <Skill title="Python" logo={faPython}/>
        </div>
        <div class="column wrapper ">
            <p>
                Grâce à la diversité de mes expériences et projets, je possède des compétences
                et connaissances dans différents domaines de l'ingénierie logicielle,
                du développement mobile au développement web en passant par de l'orienté objet.
                Ceci me permet d'être polyvalent et de m'adapter très rapidement.
            </p>
            <br />
            <br />
        </div>
        <div class="columns wrapper">
            <div class="column">
                <h3>Technologies</h3>
                <ul>
                    <li>Développement mobile : Java Android, Swift</li>
                    <li>Développement web : React, HTML, CSS</li>
                    <li>Autre : C++, Java, Node.js</li>
                </ul>
            </div>
            <div class="column">
                <h3>Outils</h3>
                <ul>
                    <li>Git</li>
                    <li>Jira</li>
                    <li>Klockwork</li>
                    <li>Jenkins</li>
                </ul>
            </div>
            <div class="column">
                <h3>Autres</h3>
                <ul>
                    <li>Montage photo (Lightroom, Photoshop)</li>
                    <li>Montage vidéo</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
)
export default Skills