import NavBar from '../components/NavBar'
import ComputerGraphic from '../assets/computer-image.svg'
import "../styles/Home.css"
import "../styles/global.css"

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='home-content'>
        <div className='text-container'>
          <p className='home-text'>Hi, I am</p>
          <h1 className='title'>Adam Vinch</h1>
          <p className='home-text bottom'>Software Developer</p>
          <button className='resume-button'>My Resume</button>
        </div>
        <img className='computer-image' src={ComputerGraphic} alt='Computer Graphic' />
      </div>
    </div>
  )
}

export default Home
