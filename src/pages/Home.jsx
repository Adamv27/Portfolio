import React from 'react'

import NavBar from '../components/NavBar'
import ComputerGraphic from '../assets/computer-image.svg'

import './Home.css'

function Home(props) {
  const scrollToSnapPoint = (snapPointRef) => {
    snapPointRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className='home-container'>
      <NavBar
        home={props.homeSnapPoint}
        about={props.aboutSnapPoint}
        projects={props.projectsSnapPoint}
        contact={props.contactSnapPoint}
      />
      <div className='home-content'>
        <div className='text-container'>
          <p className='home-text'>Hi, I am</p>
          <h1 className='home-title'>Adam Vinch</h1>
          <p className='home-text bottom'>Software Developer</p>
          <a className='contact-link' onClick={() => scrollToSnapPoint(props.contactSnapPoint)}>Contact Me</a>
        </div>
        <img className='computer-image' src={ComputerGraphic} alt='Computer Graphic'/>
      </div>
    </div>
  )
}

export default Home