import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';
import Skill from './Skill'
import {faCode, faCoffee, faPen} from '@fortawesome/free-solid-svg-icons'
import {faReact, faJava, faLinux, faSwift} from '@fortawesome/free-brands-svg-icons'


const Skills = () => (
    <div class="container skills">
        <div class="columns my-columns">
            <Skill title="C/C++" logo={faCode}/>
            <Skill title="Java" logo={faJava}/>
            <Skill title="React" logo={faReact}/>
            <Skill title="Swift" logo={faSwift}/>
            <Skill title="Linux" logo={faLinux}/>
        </div>
        <div class="column wrapper ">
            <p>fzf z eijf zeizeifjzeijfzeifu efql zfl zebfulq zbefqize biuze qu ezu fiuz qefze uze fu euif .
            </p>
            <br />
            <br />
        </div>
        <div class="columns wrapper">
            <div class="column">
                <h3>Tools</h3>
                <ul>
                    <li>GIT</li>
                    <li>JIRA</li>
                    <li>KLOCKWORK</li>
                </ul>
            </div>
            <div class="column">
                <h3>Tools</h3>
                <ul>
                    <li>GIT</li>
                    <li>JIRA</li>
                    <li>KLOCKWORK</li>
                </ul>
            </div>
            <div class="column">
                <h3>Tools</h3>
                <ul>
                    <li>GIT</li>
                    <li>JIRA</li>
                    <li>KLOCKWORK</li>
                </ul>
            </div>
        </div>
    </div>
)
export default Skills