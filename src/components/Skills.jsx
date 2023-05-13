import React from 'react'

import CLanguage from '../assets/logos/c.svg'
import Git from '../assets/logos/git.svg'
import Java from '../assets/logos/java.svg'
import Python from '../assets/logos/python.svg'
import JavaScript from '../assets/logos/javascript.svg'
import ReactLogo from '../assets/logos/react.svg'

import './Skills.css'

function Skills() {
  return (
    <div>
      <img className="skill-logo" src={Java} alt="Java"/>
      <img className="skill-logo" src={Python} alt="Python"/>
      <img className="skill-logo" src={JavaScript} alt="JavaScript"/>
      <img className="skill-logo" src={ReactLogo} alt="React"/>
      <img className="skill-logo" src={Git} alt="Git"/>
      <img className="skill-logo" src={CLanguage} alt="C Language"/>
    </div>
  )
}

export default Skills