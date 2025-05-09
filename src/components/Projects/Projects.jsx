import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../../info";

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
