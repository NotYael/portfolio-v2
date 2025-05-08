import "./Header.css";
import ThemeSlider from "../ThemeSlider/ThemeSlider";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header">
      <ThemeSlider isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="nav-container">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <div className="nav-line"></div>
      </div>
    </header>
  );
}

export default Header;
