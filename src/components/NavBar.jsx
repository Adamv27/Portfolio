import React, { useState } from 'react';
import { Link } from "react-router-dom";

import MenuIcon from './MenuIcon'
import Logo from '../assets/logo.svg'

import './NavBar.css'




const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

//  <Link to="/">
//    <img className="logo" src={Logo}></img>
//  </Link>



  return (
    <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        <MenuIcon isOpen={menuOpen}/>
      </div>

      <ul style={{display: menuOpen ? 'inline':'none'}}>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/projects">Projects</Link></li>
        <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
      
    </nav>
  )
}

export default NavBar
