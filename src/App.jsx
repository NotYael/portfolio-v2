import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Greeting />
    </div>
  );
}

export default App;
