import "./Projects.css";
// import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <main className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {props.projects.map((project) => (
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
            <div>
              <a className="more-info" href={`/projects/${project.id}`}>
                More Info
              </a>
            </div>
            <div className="project-text-container">
              <h2>{project.name}</h2>
              <p className="desc">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
