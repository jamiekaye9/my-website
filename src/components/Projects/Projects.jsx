import { useState } from "react";

const Projects = (props) => {
  const [activeTab, setActiveTab] = useState("complete");

  const completeProjects = [
    {
      id: 1,
      title: "Football Bingo",
      description:
        "My first coding project, built in 1 week, using HTML, CSS and JavaScript. This is a grid-based football knowledge game, with the aim of matching all the players to their unique identifier in order to call BINGO! I used the Fisher-Yates shuffle algorithm to randomise the grid each time the game is loaded.",
      logo: "./Images/footbingo.png",
      gitLink: "https://github.com/jamiekaye9/football-bingo",
      liveLink: "https://jamiekaye9.github.io/football-bingo/",
      skills: [
        {link: "./Images/html.png", label: "HTML"},
        {link: "./Images/css.png", label: "CSS"},
        {link: "./Images/js.png", label: "JavaScript"},
      ],
      backgroundColor: "#2E0248",
      textColor: 'white'

    },
    {
      id: 2,
      title: "Team Link",
      description: "Full Stack HR Management Application, built in 1 week, using EJS, HTML, CSS, Node.js and MongoDB. This application allows users to create, read, update and delete worker records for their company. I used reference based modelling to create a relation between users and companies.",
      logo: "./Images/team-link.png",
      gitLink: "https://github.com/jamiekaye9/team-link",
      liveLink: "https://team-link-git-main-jamie-kayes-projects.vercel.app/",
      skills: [
        {link: "./Images/js.png", label: "JavaScript"},
        {link: "./Images/node.png", label: "Node.js"},
        {link: "./Images/mongodb.png", label: "MongoDB"},
        {link: "./Images/css.png", label: "CSS"},
        {link: "./Images/html.png", label: "HTML"},
      ],
      backgroundColor: "#9161B8",
      textColor: 'white'
    },
    {
      id: 3,
      title: "Fix Hub",
      description: "Full Stack IT Incident Management Application, built in 1 week, using React, Express and MongoDB. This application allows users to create, read, update and delete IT incidents based on their role. I used role-based permissions to control access to fields when tickets are updated.",
      logo: "./Images/fix-hub logo.png",
      gitLink: "https://github.com/jamiekaye9/fix-hub-front-end",
      liveLink: "https://fix-hub.netlify.app/",
      skills: [
        {link: "./Images/react.png", label: "React"},
        {link: "./Images/express.png", label: "Express"},
        {link: "./Images/mongodb.png", label: "MongoDB"},
        {link: "./Images/css.png", label: "CSS"},
      ],
      backgroundColor: "#282828",
      textColor: '#4ADFE3'
    },
    {
      id: 4,
      title: "Job Logger",
      description: "Full Stack Job Tracking Application, built in 1 week, using Django, EJS and CSS, with a PostgreSQL database. This application allows users to add job applications to their profile and track stages as they progress. I used Django's built-in authentication system to manage user accounts and sessions.",
      logo: "",
      gitLink: "https://github.com/jamiekaye9/job-logger",
      liveLink: "https://job-logger.onrender.com",
      skills: [
        {link:"./Images/python.png", label:"Python"},
        {link:"./Images/django.png", label:"Django"},
        {link:"./Images/sql.png", label:"SQL"},
        {link:"./Images/css.png", label:"CSS"},
      ],
      backgroundColor: "#0093BF",
      textColor: 'white',
    }
  ];

  const inProgressProjects = [
    {
      id: 1,
      title: "Job Logger 2.0",
      description: "This is a rewrite of my complete Job Logger application, using a React front-end, Django back-end and Bootstrap for styling. With these changes, and additional fields to the job application model, I aim to improve the user experience, with more visual reporting.",
      logo: "",
      gitLink: "https://github.com/jamiekaye9/job-logger2.0",
      skills: [
        {link: "./Images/react.png", label: "React"},
        {link: "./Images/django.png", label: "Django"},
        {link: "./Images/sql.png", label: "SQL"},
        {link: "./Images/bootstrap.png", label: "Bootstrap"},
      ],
      backgroundColor: "#0093BF",
      textColor: 'white',
    }
  ]

  const renderProjects = (projects) => {
    return (
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-md-6 mb-4" key={project.id}>
            <div className="card h-100">
              <div className="card-header"  style={{ backgroundColor: project.backgroundColor, color: project.textColor }}>
                <h2 className="card-title">{project.title}</h2>
              </div>
              <div className="card-body">
                <p>{project.description}</p>
                <a href={project.gitLink} className="btn me-3" style={{ backgroundColor: project.backgroundColor, color: project.textColor }}>Github Link</a>
                <a href={project.liveLink} className="btn border-dark" style={{ color: project.backgroundColor, backgroundColor: project.textColor }}>Deployed Link</a>
              </div>
              <div className="card-footer">
                <ul  className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="d-inline-block d-flex flex-column align-items-center">
                      <img src={skill.link} alt="" style={{ width: '40px' }} />
                      <span className="ms-2 text-center">{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container" id="projects">
      <h2 className="text-center mb-4 display-4 mt-4">Projects</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn ${activeTab === "complete" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setActiveTab("complete")}
        >
          Complete
        </button>
        <button
          className={`btn ${activeTab === "inProgress" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setActiveTab("inProgress")}
        >
          In Progress
        </button>
      </div>

      {activeTab === "complete"
        ? renderProjects(completeProjects)
        : renderProjects(inProgressProjects)}
    </div>
  );
};

export default Projects;
