import React from 'react'

import LinkIcon from '../assets/external-link.svg'

import './ProjectCard.css'

function ProjectCard({image, tags, title, srcLink, desc}) {
  const tagBackgrounds = {
    'Python': {backgroundColor: '#E6C75D' },
    'Java': {backgroundColor: '#B08BBB' },
    'JavaScript': {backgroundColor: '#F8B88B' },
    'HTML/CSS': {backgroundColor: '#FD8A8A' },
    'SQLite3': {backgroundColor: '#73D673'},
    'React': {backgroundColor: '#B2CEFE'},
    'Swing': {backgroundColor: '#32CACD'}
  }

  return (
    <div className='card'>
      
      <figure className='card-image'>
        <img src={image} alt='personal programming project' />
      </figure>
      <div className='card-content'>
        <div className='tags'> 
          {tags.map(tag => (
            <span 
              className='tag' 
              key={tag}
              style={tagBackgrounds[tag]}
            > {tag}</span>
          ))}
        </div>
          
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{desc}</p>
        <a className='source-link' href={srcLink}>
          Github
          <img className='link-icon' src={LinkIcon}></img>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard