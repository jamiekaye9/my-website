import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="navbar-container">
      <div>
        <img className="logo" src="./Images/logo.png" alt="Logo" />
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link className="text" to="/">
          Home
        </Link>
        <Link className="text" to="/about-me">
          About Me
        </Link>
        <Link className="text" to="/projects">
          Projects
        </Link>
      </nav>
      <div className="links">
        <a href="https://linkedin.com/in/jamie-kaye-734049187">
          <img
            className="link-logo"
            src="./Images/linkedin-logo.png"
            alt="LinkedIn Logo"
          />
        </a>
        <a href="https://github.com/jamiekaye9">
          <img
            className="link-logo"
            src="./Images/github-logo.png"
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
