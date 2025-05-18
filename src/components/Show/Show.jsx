import { useParams } from "react-router-dom";
import "./Show.css";

const Show = (props) => {
  const { id } = useParams();
  const project = props.projects.find((project) => project.id === parseInt(id));
  return (
    <main className="show-main-container">
        <div
          className="show-logo-container"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <img
            className={project.imageWidthClassShow}
            src={project.img}
            alt={project.name}
          />
          <a href={project.link} className="show-link">
            Deployed Link
          </a>
        </div>
      <div className="show-text-container">
        <h2 className="show-title">Description</h2>
        <p className="show-text">{project.description}</p>
      </div>
      <div className="show-text-container">
        <h2 className="show-title">Reflection</h2>
        <p className="show-text">{project.build}</p>
      </div>
      <div className="show-tech-container">
          <h2 className="show-title">Technologies Used:</h2>
          <p className="show-text-tech">{project.techUsed}</p>
          <a href={project.gitLink} className="show-link-git">
            GitHub Link
          </a>
      </div>
    </main>
  );
};

export default Show;
