import "./About.css";
import { about } from "../../../info";

export default function About() {
  return (
    <div className="about">
      <img src="/me.JPG" alt="me" className="me-image" />
      <div className="about-text">
        <span className="about-text-title">{about.title}</span>
        <span className="about-text-description">{about.description}</span>
      </div>
      <div className="scroll-down">
        <span>⮟</span>
      </div>
    </div>
  );
}
