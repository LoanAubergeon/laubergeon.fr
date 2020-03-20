import React from 'react';

import 'bulma/css/bulma.css'
import '../css/App.css';


class Experience extends React.Component {
    render() {
        // props
        const {
            title,
            content,
            years,
            logo,
            duration,
        } = this.props;
        const myDuration = duration ? "- "+duration : "";

        return (
            <div class="notification">
                <div class="columns">
                    <div class="column is-1">
                        <img src={logo} alt="" class="banner-image"/>
                    </div>
                    <div class="column is-11">
                        <h1 class="subtitle">{title} - {years} {myDuration} </h1>
                        {content} 
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;
