import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Collapse from 'bootstrap/js/dist/collapse';

const Navbar = () => {
  const navbarRef = useRef(null);
  const bsCollapse = useRef(null);
  const location = useLocation();

  // Initialize Bootstrap Collapse instance on mount
  useEffect(() => {
    if (navbarRef.current) {
      bsCollapse.current = new Collapse(navbarRef.current, {
        toggle: false // don't auto-toggle on init
      });
    }
  }, []);

  // Close navbar on route change
  useEffect(() => {
    if (bsCollapse.current && navbarRef.current.classList.contains('show')) {
      bsCollapse.current.hide();
    }
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container-fluid ms-2">
        <Link to="/" className="navbar-brand limelight text-info">
          <img src="./Images/Portfolio.png" alt="Logo" style={{ width: "150px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => bsCollapse.current.toggle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-5" id="navbar" ref={navbarRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about-me" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="navbar-text d-flex gap-4 me-2">
            <a href="https://github.com/jamiekaye9" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/jamie-kaye-734049187" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin fs-1"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;