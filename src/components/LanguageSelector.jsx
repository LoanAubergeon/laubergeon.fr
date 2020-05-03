import React, {useState} from 'react'

import 'bulma/css/bulma.css'
import '../css/App.css';
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {

    const { i18n } = useTranslation()

    const [buttonText, setButtonText] = useState();

    const changeText = () => {
        if (buttonText === "fr") {
        i18n.changeLanguage("fr");
        setButtonText("en");
        } else {
        i18n.changeLanguage("en");
        setButtonText("fr");
        }
    }

    const str2logo = (buttonText === "fr") ? "🇫🇷" : "🇬🇧";

    return (
        <span 
            value={buttonText}
            role="img"
            aria-labelledby="englishflag"
            onClick={() => {
            changeText();
            }}>
            {str2logo}
        </span>
    )
}

export default LanguageSelector