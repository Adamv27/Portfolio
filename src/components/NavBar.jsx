import React from 'react'

import './NavBar.css'


function NavBar({home, about, projects, contact}) {

  const scrollToSnapPoint = (snapPointRef) => {
    snapPointRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className='nav-container'>
      <a className='nav-link home ' onClick={() => scrollToSnapPoint(home)} >
      </a>
      <a className='nav-link first' onClick={() => scrollToSnapPoint(about)}>About</a>
      <a className='nav-link' onClick={() => scrollToSnapPoint(projects)}>Projects</a>
      <a className='nav-link' onClick={() => scrollToSnapPoint(contact)}>Contact</a>
    </div>
  )
}

export default NavBar