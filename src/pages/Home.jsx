import React from 'react'

import NavBar from '../components/NavBar'

import './Home.css'

function Home(props) {
  return (
    <div className='home-container'>
      <NavBar
        home={props.homeSnapPoint}
        about={props.aboutSnapPoint}
        projects={props.projectsSnapPoint}
        contact={props.contactSnapPoint}
      />
      <p>Home</p>
    </div>
  )
}

export default Home
