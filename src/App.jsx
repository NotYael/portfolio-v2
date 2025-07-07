import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import ContactMe from "./components/ContactMe/ContactMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState("about");
  const contentRightRef = useRef(null);
  const isScrollingRef = useRef(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme class to document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, [isDarkMode]);

  // Track scroll position to update current section
  useEffect(() => {
    const handleScroll = () => {
      if (contentRightRef.current && !isScrollingRef.current) {
        const container = contentRightRef.current;
        const scrollTop = container.scrollTop;

        const aboutSection = document.getElementById("about");
        const projectsSection = document.getElementById("projects");
        const experienceSection = document.getElementById("experience");

        const sections = [
          { id: "about", ref: aboutSection },
          { id: "projects", ref: projectsSection },
          { id: "experience", ref: experienceSection },
        ];

        let closestSection = "about";
        let minDistance = Infinity;

        sections.forEach((section) => {
          if (section.ref) {
            const offsetTop = section.ref.offsetTop;
            const distance = Math.abs(offsetTop - scrollTop - 100); // Add buffer
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section.id;
            }
          }
        });

        setCurrentSection(closestSection);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && contentRightRef.current) {
      const container = contentRightRef.current;
      const sectionTop = section.offsetTop;

      const scrollTo = sectionTop - 120;

      // Immediately update the current section when button is clicked
      setCurrentSection(sectionId);

      // Prevent scroll listener from interfering
      isScrollingRef.current = true;

      container.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });

      // Re-enable scroll detection after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <div className="app">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />
      <div className="content">
        <div className="content-left">
          <Greeting />
          <ContactMe />
        </div>
        <div className="content-right" ref={contentRightRef}>
          <div id="about">
            <About />
          </div>
          <div className="line" />
          <div id="projects">
            <Projects />
          </div>
          <div className="line" />
          <div id="experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
