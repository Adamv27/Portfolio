import { Link } from "react-router-dom";

import Logo from '../assets/logo.svg'
import './NavBar.css'


function NavBar() {
  return (
    <nav className='nav-container'>
      <Link to="/">
        <img className="logo" src={Logo}></img>
      </Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar
