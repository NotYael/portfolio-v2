import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <div className="contact-me-text">
        <span>Want to get in touch?</span>
        <span>Contact me here!</span>
      </div>
      <div className="contact-me-icons">
        <a href="mailto:contactdanyael@gmail.com">
          <img src="/gmail.svg" alt="gmail" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/danyael-dela-cruz/">
          <img src="/linkedin.svg" alt="linkedin" className="icon" />
        </a>
        <a href="https://www.instagram.com/yael.dev/">
          <img src="/instagram.svg" alt="instagram" className="icon" />
        </a>
      </div>
    </div>
  );
}
