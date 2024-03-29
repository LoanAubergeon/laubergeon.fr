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
        <div class="column wrapper">
            <p>
                Je suis curieux, autonome et rigoureux. <br />
                Mes différents projets et expériences m’ont permis d’acquérir une base technique  <br />
                en ingénierie logicielle, 
                et de révéler chez moi une certaine polyvalence et une facilité d'adaptation.<br />
            </p>
            <br />
            <br />
        </div>
        <div class="columns wrapper">
            <div class="column">
                <h3>Technologies</h3>
                <ul>
                    <li>JavaScript, React</li>
                    <li>HTML et CSS</li>
                    <li>C++, Java, Python</li>
                </ul>
            </div>
            <div class="column">
                <h3>Outils</h3>
                <ul>
                    <li>Git</li>
                    <li>Jira</li>
                    <li>Klockwork</li>
                    <li>Jenkins</li>
                    <li>Robot Framework</li>
                    <li>Selenium</li>
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