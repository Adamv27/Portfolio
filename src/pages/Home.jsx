import React from 'react'
import NavBar from '../components/NavBar'
import ComputerGraphic from '../assets/computer-image.svg'

import './Home.css'

const Home = props => {
  return (
    <div class='home-container'>
      <NavBar
        home={props.homeSnapPoint}
        about={props.aboutSnapPoint}
        projects={props.projectsSnapPoint}
        contact={props.contactSnapPoint}
      />
      <div class='home-content'>
        <div class='text-container'>
          <p class='home-text'>Hi, I am</p>
          <h1 class='home-title'>Adam Vinch</h1>
          <p class='home-text bottom'>Software Developer</p>
          <a class='contact-link' onClick={() => scrollToSnapPoint(props.contactSnapPoint)}>Contact Me</a>
        </div>
        <img class='computer-image' src={ComputerGraphic} alt='Computer Graphic'/>
      </div>
    </div>
  )
}

export default Home
