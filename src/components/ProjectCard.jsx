import React from 'react'

import './ProjectCard.css'

function ProjectCard({imageLink, tags}) {
  const tagBackgrounds = {
    'Python': {backgroundColor: '#F2D388' },
    'Java': {backgroundColor: '#B08BBB' },
    'JavaScript': {backgroundColor: '#F8B88B' },
    'HTML/CSS': {backgroundColor: '#FD8A8A' },
    'SQLite3': {backgroundColor: '#BAED91'},
    'React': {backgroundColor: '#B2CEFE'}
  }

  return (
    <div className='card'>
      
      <figure className='card-image'>
        <img src={imageLink} alt='personal programming project' />
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
          
        <h3 className='card-title'>Project</h3>
        <p className='card-description'>Lorem ipsum dolor sit amet consectetur. Scelerisque vitae ornare ut elementum euismod orci molestie. Urna blandit</p>
        <a className='source-link' href="https://www.github.com/Adamv27">GitHub</a>
      </div>
    </div>
  )
}

export default ProjectCard