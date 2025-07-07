import "./Experience.css";
import { experience } from "../../../info";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
  return (
    <div className="experience">
      {experience.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
      <div className="experience-line"></div>
      <a
        href="https://drive.google.com/file/d/1xXqV1j3OihP4DaxRo6Mgb4_gIxRFzBFP/view?usp=sharing"
        target="_blank"
        className="resume"
      >
        View my resume ↗
      </a>
    </div>
  );
}
