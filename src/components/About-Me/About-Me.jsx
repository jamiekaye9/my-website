import { useState } from "react";

const AboutMe = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
      <div className="row justify-content-center">
        <div className="col-11 col-md-10 col-lg-8 d-flex flex-column justify-content-center align-items-center gap-4 mb-5">
          <h1 className="display-4">About Me</h1>
          <p className="text-center">
            From an early age, I’ve been captivated by how technology transforms
            manual tasks into seamless digital experiences. Whether fixing
            broken systems or customising interfaces, I’ve always looked beyond
            the surface to understand how things work. My career as a Business
            Analyst deepened my curiosity, revealing that my analytical mindset,
            drive to learn, and creative problem-solving were well-suited to
            software development. This led me to complete General Assembly’s
            Software Engineering Bootcamp, where I gained strong foundational
            skills in programming. Software engineering has now become more than
            a career path; it’s a passion I actively pursue through continuous
            learning and hands-on practice. I’m now seeking my first role in the
            industry and am excited to channel my passion into helping an
            innovative company build impactful, user-centric software products.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-11 col-md-10 col-lg-8">
          <div className="card rounded-4 border-2 mb-5 h-100">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 display-6">Coding Skills</h3>
              <ul className="d-flex flex-row align-items-center justify-content-center flex-wrap list-unstyled gap-4">
                {[
                  { src: "html", label: "HTML" },
                  { src: "css", label: "CSS" },
                  { src: "js", label: "JavaScript" },
                  { src: "react", label: "React" },
                  { src: "node", label: "Node.js" },
                  { src: "mongodb", label: "MongoDB" },
                  { src: "express", label: "Express" },
                  { src: "python", label: "Python" },
                  { src: "github", label: "Git" },
                  { src: "bootstrap", label: "Bootstrap" },
                  { src: "jira", label: "Jira" },
                  { src: "devops", label: "DevOps" },
                  { src: "django", label: "Django" },
                  { src: "sql", label: "SQL" },
                ].map((tech) => (
                  <li key={tech.label} className="d-flex flex-column align-items-center">
                    <img src={`./Images/${tech.src}.png`} alt={tech.label} style={{ width: "45px" }} />
                    <p className="fs-6">{tech.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-11 col-md-10 col-lg-8">
          <div className="card rounded-4 border-2 mb-5 h-100">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 display-6">Soft Skills</h3>
              <ul className="d-flex flex-row align-items-center justify-content-center flex-wrap list-unstyled gap-4">
                {[
                  { icon: "search", label: "Problem Solving" },
                  { icon: "person-heart", label: "Stakeholder Management" },
                  { icon: "bar-chart", label: "Data Analysis" },
                  { icon: "chat-dots", label: "Communication" },
                  { icon: "lightbulb", label: "Critical Thinking" },
                  { icon: "people", label: "Teamwork" }
                ].map((skill) => (
                  <li key={skill.label} className="d-flex flex-column align-items-center" style={{ width: "100px" }}>
                    <i className={`bi bi-${skill.icon} fs-1`}></i>
                    <p className="fs-6 text-center">{skill.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-11 col-md-10 col-lg-8">
          <div className="card rounded-4 border-2 mb-5 h-100">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 display-6">Hobbies & Interests</h3>
              <p className="card-text text-center">
                I’m a lifelong sports enthusiast, with a particular passion for Football, Formula 1, and Tennis.
                I recently attended my first Formula 1 race in Qatar and was hooked by the whole event.
                I’m now looking at the calendar for opportunities to visit new circuits and cities.
                Outside of sports, I enjoy cooking, going to the theatre, comedy nights, and discovering new places through travel.
                I grew up eating my grandmother’s Middle Eastern dishes and now enjoy recreating those recipes for family and friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;