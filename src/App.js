import React, { useEffect, useState} from "react"
import 'bulma/css/bulma.css'
import './css/App.css';
import './i18n'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/Navbar'

import Skills from './components/Skills';
import Portfolio from './components/Porfolio';
import Banner from './components/Banner';
import AboutContainer from './components/AboutContainer';
import ExperienceContainer from './components/ExperienceContainer';
import PortfolioContainer from './components/PorfolioContainer';
//import { useTranslation } from 'react-i18next'
//import i18n from './i18n'

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > window.innerHeight - 70 ? setSticky(true) : setSticky(false);
  };

  const debounce = (func, wait = 5, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener('scroll', debounce(handleScroll));

  //const { t } = useTranslation();

  return (
    <div class='monPortfolio'>
      <NavBar sticky={isSticky} />
      <Banner />
      <AboutContainer />
      <ExperienceContainer />
      <PortfolioContainer />
      <Contact id='contact' />
    </div>
  );
}

export default App;
