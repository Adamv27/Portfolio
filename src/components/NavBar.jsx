import { Link } from "react-router-dom";


import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
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
			<div id="nav-menu-button">
				Menu
			</div>
		</nav>
	)
}

export default NavBar
