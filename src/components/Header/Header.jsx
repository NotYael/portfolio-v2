import "./Header.css";
import ThemeSlider from "../ThemeSlider/ThemeSlider";

function Header({ isDarkMode, toggleTheme, scrollToSection, currentSection }) {
  return (
    <header className="header">
      <ThemeSlider isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="nav-container">
        <button
          className={`nav-button ${currentSection === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={`nav-button ${
            currentSection === "projects" ? "active" : ""
          }`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={`nav-button ${
            currentSection === "experience" ? "active" : ""
          }`}
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </button>
        <div className="nav-line"></div>
      </div>
    </header>
  );
}

export default Header;
