import React, { useReducer, useRef } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'


import './App.css'
import Projects from './pages/Projects'

function App() {

  const homeSnapPoint = useRef(null);
  const aboutSnapPoint = useRef(null)
  const projectsSnapPoint = useRef(null)
  const contactSnapPoint = useRef(null)

  return (
    <div className="container">
      <section className="page" ref={homeSnapPoint}>
        <Home 
          homeSnapPoint={homeSnapPoint}
          aboutSnapPoint={aboutSnapPoint}
          projectsSnapPoint={projectsSnapPoint}
          contactSnapPoint={contactSnapPoint}
        />
      </section>
      <section className="page" ref={aboutSnapPoint}>
        <About />
      </section>
      <section className="page" ref={projectsSnapPoint}>
        <Projects />
      </section>
      <section className="page" ref={contactSnapPoint}>
        <h3>Contact</h3>
      </section>
    </div>
  )
}

export default App