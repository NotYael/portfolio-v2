import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image_link}
        alt={project.title}
        className="project-card-image"
      />
      <div className="project-card-content">
        <span className="project-card-title">{project.title}</span>
        <span className="project-card-short-description">
          {project.short_description}
        </span>
        <div className="project-card-logos">
          <div className="logo-circles">
            {Object.entries(project.logos).map(([key, value]) => (
              <div className="logo-circle">
                <img src={value} alt={key} />
              </div>
            ))}
          </div>
          <a href={project.repository_link} className="repository-link">
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}
