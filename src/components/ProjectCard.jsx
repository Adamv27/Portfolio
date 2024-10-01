const ProjectCard = ({ project }) => {

  const imagePath = `/assets/${project.image}`;

  return (
    <div className="project-card">
      <img className="project-image" src={imagePath} alt={project.image} />
      <div className="project-content">
        <div className="technologies-container">
          {project.technologies.map((tech, index) => (
            <span className="technology-pill" key={index}>
              {tech}
            </span>
          ))}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p>{project.description}</p>

        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;