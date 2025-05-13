import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <main className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
      </div>
      <div className="projects-grid">
        {props.projects.map((project) => (
          <Link className="link" to={`/projects/${project.id}`} key={project.id}>
            <div
              key={project.id}
              className="project-container"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={project.img}
                  alt={project.name}
                  style={{ width: project.imageWdith }}
                />
              </div>
              <div className="project-text-container">
                <h2>{project.name}</h2>
                <p className="desc">{project.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
