import { Link } from "react-router-dom";


import "../styles/NavBar.css";

const NavBar = () => {
	return (
		<nav id="navbar">
			<Link to="about">About</Link>
			<Link to="projects">Projects</Link>
			<Link to="contact">Contact</Link>
		</nav>
	)

}

export default NavBar