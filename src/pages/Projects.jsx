import projectData from "../assets/projects.json";
import GridPattern from "../components/backgrounds/GridPattern";
import ProjectCard from "../components/ProjectCard";

import "../styles/Projects.css";

const Projects = () => {

	return (
		<>
			<div className="projects-grid">
				{projectData.projects.map((project) =>
					<ProjectCard
						key={project.title}
						project={project}
					/>
				)}
			</div>
		</>
	)
}

export default Projects 
