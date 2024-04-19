import { Card, Button, Stack, Badge } from "react-bootstrap";

function ProjectCard({ 
  title, 
  description,
  imageSrc,
  githubUrl,
  demoUrl,
  tags,
}) {
  
  return (
    <Card id="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body className="d-flex flex-column justify-content-around align-items-start">
        <Stack direction="horizontal" gap={1}>
          {tags && tags.map(tag => (
            <Badge 
              key={tag} 
              bg={tag.toLowerCase()}
            >{tag}</Badge>
          ))}
        </Stack>
        <Card.Title id="project-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" as="a" href={githubUrl}>GitHub</Button>
        {demoUrl && (
          <Button>Demo</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
