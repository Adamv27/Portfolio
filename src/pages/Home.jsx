<<<<<<< Updated upstream
import NavBar from '../components/NavBar'
import ComputerGraphic from '../assets/computer-image.svg'
=======
import NavBar from "../components/NavBar"
import ComputerGraphic from "../assets/computer-image.svg"
>>>>>>> Stashed changes

import "../styles/Home.css"
import "../styles/global.css"

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='home-content'>
        <div className='text-container'>
          <p className='home-text'>Hi, I am</p>
          <h1 className='home-title'>Adam Vinch</h1>
<<<<<<< Updated upstream
          <p className='home-text bottom'>Software Developer</p>
          <a className='contact-link'>Contact Me</a>
        </div>
        <img className='computer-image' src={ComputerGraphic} alt='Computer Graphic' />
=======
          <p className='home-text'>Software Developer</p>
          <a className='resume-link'>Contact Me</a>
        </div>
        <img className='computer-image' src={ComputerGraphic} alt='Computer Graphic'/>
>>>>>>> Stashed changes
      </div>
    </div>
  )
}

export default Home
