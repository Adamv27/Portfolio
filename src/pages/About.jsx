import React from 'react'

import Skills from '../components/Skills'

import './About.css'


function About() {
  return (
    <div className='about-page'>
      <div className='text-box'>
        <h1 className='title'>About</h1>
        <div className='line' style={{width: '65%'}}></div>
        <p className='text'>I am currently a junior at James Madison University pursuing a degree in computer science. I am passionate about learning new technologies, languages, and frameworks by creating personal projects. I love all areas of CS although I particularly like creating beautiful looking applications that provide a great user experience</p>
      </div>
      <Skills />
    </div>
  )
}

export default About
