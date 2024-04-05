import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ComputerGraphic from '../assets/computer-image.svg'

import '../scss/Home.scss'

const Home = () => {
  return (
    <Container className="home-container d-flex flex-row justify-content-center align-items-center">
      <div className="content">
        <p className="home-text">Hi, I am</p>
        <h1 id="title" className="home-text">Adam Vinch</h1>
        <p className="home-text">Computer Science student and <br/>aspiring Software Developer</p>
        <Button id="home-button">See my work</Button>    
      </div>
      <div className="content">
        <Image id="graphic" src={ComputerGraphic} />
      </div>
    </Container>
  )
}

export default Home
