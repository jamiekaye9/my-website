import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="navbar-container">
      <div>
        <img className="logo" src="/Images/logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <a className="text" href="/">
          Home
        </a>
        <a className="text" href="/about-me">
          About Me
        </a>
        <a className="text" href="/projects">
          Projects
        </a>
      </nav>
      <div className="links">
        <a href="https://linkedin.com/in/jamie-kaye-734049187">
          <img
            className="link-logo"
            src="/Images/linkedin-logo.png"
            alt="LinkedIn Logo"
          />
        </a>
        <a href="https://github.com/jamiekaye9">
          <img
            className="link-logo"
            src="/Images/github-logo.png"
            alt="Github Logo"
          />
        </a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </main>
  );
};

export default Navbar;
