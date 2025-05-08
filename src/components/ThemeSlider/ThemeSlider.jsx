import "./ThemeSlider.css";

function ThemeSlider({ isDarkMode, toggleTheme }) {
  return (
    <div className="theme-slider-container">
      <span className="theme-label">Light</span>
      <label className="theme-toggle">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <span className="theme-label">Dark</span>
    </div>
  );
}

export default ThemeSlider;
