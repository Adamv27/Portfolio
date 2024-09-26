import { Link } from "react-router-dom";


import "../styles/NavBar.css";
import logo from "../assets/logo.svg";

const NavBar = () => {
	return (
		<nav id="navbar">
			<Link to="/">
				<img src={logo} width="50" height="50" />
			</Link>
			<div>
				<Link to="blog">Blog</Link>
				<Link to="projects">Projects</Link>
				<Link to="contact">Contact</Link>
			</div>
		</nav>
	)

}

export default NavBar