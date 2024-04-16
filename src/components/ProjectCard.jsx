import { Card, Button } from "react-bootstrap";

import LinkIcon from '../assets/external-link.svg'


function ProjectCard() {
  const tagBackgrounds = {
    'Python': {backgroundColor: '#E6C75D' },
    'Java': {backgroundColor: '#B08BBB' },
    'JavaScript': {backgroundColor: '#F8B88B' },
    'HTML/CSS': {backgroundColor: '#FD8A8A' },
    'SQLite3': {backgroundColor: '#73D673'},
    'React': {backgroundColor: '#B2CEFE'},
    'Swing': {backgroundColor: '#32CACD'}
  }
/*
    <div className='tags'> 
          {tags.map(tag => (
            <span 
              className='tag' 
              key={tag}
              style={tagBackgrounds[tag]}
            > {tag}</span>
          ))}
        </div>
*/

  return (
    <Card id="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick exmaple text to build on the card title and make up the bulk of the card's content. 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
