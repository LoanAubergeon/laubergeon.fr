import React from 'react';

import 'bulma/css/bulma.css'
import '../css/App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class Skill extends React.Component {
    render() {
        // props
        const {
            title,
            logo,
        } = this.props;

        return (
            <div class="column my-column">
                <div class="my-icon">
                    <FontAwesomeIcon className="icon" icon={logo}/>
                </div>
                <h3>{title}</h3>
            </div>
        );
    }
}

export default Skill;
