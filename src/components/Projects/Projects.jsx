import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Football Bingo",
      shortDescription:
        "Bingo game where users have to match a football player to their nationality, club or position.",
      img: "/Images/footbingo.png",
      backgroundColor: "#2E0248",
      imageWdith: "350px",
    },
    {
      id: 2,
      name: "Team Link",
      shortDescription:
        "HR Management Application, allowing users to create, manage and analyse their workforce",
      img: "/Images/team-link.png",
      backgroundColor: "#9161B8",
      imageWdith: "230px",
    },
    {
      id: 3,
      name: "Fix Hub",
      shortDescription:
        "IT Incident Management Application, allowing users to create, manage and analyse their IT incidents.",
      img: "/Images/fix-hub logo.png",
      backgroundColor: "#2F302F",
      imageWdith: "170px",
    },
  ];
  return (
    <main className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
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
        ))}
      </div>
    </main>
  );
};

export default Projects;
