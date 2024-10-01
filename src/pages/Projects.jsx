import projectData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

	return (
		<>
			{projectData.projects.map((project) =>
				<ProjectCard
					key={project.title}
					project={project}
				/>
			)}
		</>
	)
}

export default Projects 