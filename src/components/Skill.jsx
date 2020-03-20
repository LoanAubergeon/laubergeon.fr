import React from 'react';

import 'bulma/css/bulma.css'
import '../css/App.css';


class Skill extends React.Component {
    render() {
        // props
        const {
            title,
            content,
            years,
            logo,
            duration,
        } = this.props;
        const myDuration = this.props.duration ? "- "+this.props.duration : "";

        return (

        );
    }
}

export default Skill;
