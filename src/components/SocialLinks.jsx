import React from 'react'

import ProjectCard from '../components/ProjectCard'

import './Projects.css'

function Projects() {
  return (
    <div className='projects-container'>
    <h1 className='title'>Projects</h1>
    <div className='line' style={{width: '40%'}}></div>
      <div className='card-container'>
        <ProjectCard 
          imageLink="/card-placeholder.png"
          tags={["JavaScript", "HTML/CSS"]}
        />
        <ProjectCard 
          imageLink="/card-placeholder2.jpg"
          tags={["Java"]}
        />
        <ProjectCard 
          imageLink="/card-placeholder3.jpg"
          tags={["Python", "SQLite3"]}
        />
      </div>
      
    </div>
  )
}

export default Projects