import { Link } from "react-router-dom";


import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import Resume from "../assets/Adam_Vinch_Resume.pdf";

const NavBar = () => {
	return (
		<nav id="navbar">
			<Link to="/">
				<img src={logo} width="50" height="50" />
			</Link>
			<div id="nav-links">
				<Link to="projects">Projects</Link>
				<Link to="contact">Contact</Link>
				<a href={Resume} id='resume-link' target='_blank' rel='noopener noreferrer'>Resume</a>
			</div>
      <img id="nav-menu-button" src={menuIcon} />
		</nav>
	)
}

export default NavBar
