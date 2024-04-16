import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

import ThemeSwitch from '../components/ThemeSwitch';
import Logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="d-none d-lg-block" as={Link} to="/" href="/">
          <img src={Logo} with="25" height="25" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="auto">
            <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" href="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" href="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ThemeSwitch />
      </Container>
    </Navbar> 
  )
}

export default NavBar
