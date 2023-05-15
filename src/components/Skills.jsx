import React from 'react'


import SkillsBubble from '../assets/skills/skills.svg'
import JavaBubble from '../assets/skills/java.svg'
import JSBubble from '../assets/skills/javascript.svg'
import PythonBubble from '../assets/skills/python.svg'
import GitBubble from '../assets/skills/git.svg'
import ReactBubble from '../assets/skills/react.svg'
import CBubble from '../assets/skills/c.svg'

import './Skills.css'

function Skills() {
  return (
    <div className='skills-grid'> 
        <img className='skill skills' src={SkillsBubble} />
        <img className='skill java' src={JavaBubble} />
        <img className='skill javascript' src={JSBubble} />
        <img className='skill python' src={PythonBubble} />
        <img className='skill react' src={ReactBubble} />
        <img className='skill git' src={GitBubble} />
        <img className='skill c' src={CBubble} />    
    </div>
  )
}

export default Skills