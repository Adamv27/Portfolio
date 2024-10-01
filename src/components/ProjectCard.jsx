
const ProjectCard = ({ project }) => {
  return (
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard;