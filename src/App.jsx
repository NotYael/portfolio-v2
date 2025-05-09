import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import ContactMe from "./components/ContactMe/ContactMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="content">
        <div className="content-left">
          <Greeting />
          <ContactMe />
        </div>
        <div className="content-right">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
