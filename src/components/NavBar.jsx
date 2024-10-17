import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg"
import Resume from "../assets/Adam_Vinch_Resume.pdf";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
    
	return (
		<nav id="navbar">
			<div id="navbar-container">
				<Link to="/">
					<img id="logo" src={logo} onClick={() => setIsOpen(false)} width="50" height="50" />
				</Link>
				<div id="nav-links">
					<Link to="projects">Projects</Link>
					<Link to="contact" onClick={() => setIsOppen(false)}>Contact</Link>
					<a href={Resume} id='resume-link' target='_blank' rel='noopener noreferrer'>Resume</a>
				</div>
			</div>

			<div id="nav-menu">
				<img
					src={menuIcon}
					className={`nav-menu-icon ${isOpen ? "hide" : "show"}`}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<img
					src={closeIcon}
					className={`nav-menu-icon ${isOpen ? "show" : "hide"}`}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<div className={`nav-menu-links ${isOpen ? "show" : "hide"}`}>
					<Link to="projects" onClick={() => setIsOpen(false)}>Projects</Link>
					<Link to="contact" onClick={() => setIsOpen(false)}>Contact</Link>
					<a href={Resume} id='resume-link' target='_blank' rel='noopener noreferrer'>Resume</a>
				</div>
			</div>
		</nav >
	)
}

export default NavBar
