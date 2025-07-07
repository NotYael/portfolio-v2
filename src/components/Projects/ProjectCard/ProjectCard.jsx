import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const renderRepositoryLinks = () => {
    const { repository_link } = project;

    if (
      repository_link.status === "private" ||
      repository_link.status === "Private"
    ) {
      // Private repository - show as non-clickable element
      return <div className="repository-link private">Private Repo</div>;
    }

    if (repository_link.status === "public") {
      if (repository_link.links.length === 1) {
        // Single public repository
        return (
          <a
            href={repository_link.links[0]}
            className="repository-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
        );
      } else if (repository_link.links.length > 1) {
        // Multiple repositories - split into two buttons
        return (
          <div className="repository-links-split">
            <a
              href={repository_link.links[0]}
              className="repository-link-split"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            <a
              href={repository_link.links[1]}
              className="repository-link-split"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
          </div>
        );
      }
    }

    // Fallback
    return null;
  };

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
              <div className="logo-circle" key={key}>
                <img src={value} alt={key} />
              </div>
            ))}
          </div>
          {renderRepositoryLinks()}
        </div>
      </div>
    </div>
  );
}
