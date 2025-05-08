import "./Greeting.css";

function Greeting() {
  return (
    <div className="greeting-container">
      <div className="name-container">
        <span className="name">Hi!</span>
        <span className="name">I'm Yael.</span>
      </div>
      <div className="job-container">
        <span className="job">Web Developer</span>
      </div>
    </div>
  );
}

export default Greeting;
