import { Link } from "react-router-dom";

import Logo from '../assets/logo.svg'
import './NavBar.css'


<<<<<<< Updated upstream
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
=======
const NavBar = () => {
  return (
    <div className='nav-container'>
      <a className='nav-link home'>
        <img src={Logo}></img>
      </a>
      <a className='nav-link first'>About</a>
      <a className='nav-link'>Projects</a>
      <a className='nav-link'>Contact</a>
    </div>
>>>>>>> Stashed changes
  )
}

export default NavBar
