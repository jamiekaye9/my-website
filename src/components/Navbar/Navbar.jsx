import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="navbar-container">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link className="text" to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link className="text" to="/about-me" onClick={() => setIsOpen(false)}>
          About Me
        </Link>
        <Link className="text" to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link className="text" to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </nav>
      <div className="socials">
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
    </main>
  );
};

export default Navbar;
