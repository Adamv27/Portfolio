import React from 'react'

import Logo from '../assets/logo.svg'

import './NavBar.css'


function NavBar({home, about, projects, contact}) {

  const scrollToSnapPoint = (snapPointRef) => {
    snapPointRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div class='nav-container'>
      <a class='nav-link home'>
        <img src={Logo}></img>
      </a>
      <a class='nav-link first'>About</a>
      <a class='nav-link'>Projects</a>
      <a class='nav-link'>Contact</a>
    </div>
  )
}

export default NavBar
