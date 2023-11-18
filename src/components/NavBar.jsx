import React from 'react'
import { Link } from "react-router-dom";

import Logo from '../assets/logo.svg'
import './NavBar.css'


function NavBar() {
  return (
    <nav className='nav-container'>
      <Link to="/">
        <img src={Logo}></img>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar
