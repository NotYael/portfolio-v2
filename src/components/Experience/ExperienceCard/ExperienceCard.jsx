import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <div className="experience-card-title">
        <span>{experience.title}</span>
        <span>{experience.company}</span>
      </div>
      <div className="experience-card-extra">
        <span>{experience.date}</span>
        <span>{experience.location}</span>
      </div>
      <div className="experience-card-description">
        <span>{experience.description}</span>
      </div>
      <div className="experience-card-technologies">
        {experience.technologies.map((technology) => (
          <span>{technology}</span>
        ))}
      </div>
    </div>
  );
}
