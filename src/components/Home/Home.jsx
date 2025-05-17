import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-header">
        <img src="./Images/logo.png" className="logo-big" alt="Logo" />
        <h2 className="job-title">Portfolio Website</h2>
      </section>
      <section className="home-content">
        <div className="home-text">
          <h1 className="home-name">Jamie Kaye</h1>
          <p className="job-title">Software Engineer</p>
        </div>
        <div className="box-container">
          <Link to="/about-me" className="box-link">
            <div className="box">
              <h2>About Me</h2>
              <img
                className="logo"
                src="./Images/about-me-logo.png"
                alt="About Me"
              />
            </div>
          </Link>
          <Link to="/projects" className="box-link">
          <div className="box">
            <h2>Projects</h2>
            <img
              className="logo"
              src="./Images/projects-logo.png"
              alt="Projects"
            />
          </div>
          </Link>
          <Link to="/contact" className="box-link">
          <div className="box">
            <h2>Contact</h2>
            <img className="logo" src="./Images/contact.png" alt="Contact Me" />
          </div>
            </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
