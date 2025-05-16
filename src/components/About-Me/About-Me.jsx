import { useState } from "react";
import "./About-Me.css";

const AboutMe = () => {
  const pageContent = [
    {
      id: 1,
      title: "Software Engineering",
      content:
        "I recently completed General Assembly’s 450+ hour Software Engineering Bootcamp, an intensive program focused on full-stack development. Through hands-on labs, lectures, and real-world projects, I built a portfolio that showcases my ability to work across multiple languages, frameworks, and problem-solving challenges.",
      image: "./Images/software.jpeg",
    },
    {
      id: 2,
      title: "Experience",
      content:
        "I have four years of experience as a Business Analyst in the luxury retail and legal sectors, working on projects from minor enhancements to large-scale digital transformations. This has given me a strong grasp of the project lifecycle, agile and waterfall methods, and effective stakeholder communication, along with a keen interest in data governance and quality.",
      image: "./Images/office.jpeg",
    },
    {
      id: 3,
      title: "Skills",
      content: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Postman",
        "SQL",
        "Python",
        "Django",
        "EJS",
      ],
      image: "./Images/skills.jpeg",
    },
    {
      id: 4,
      title: "Personal",
      content:
        "I'm 26, originally from Manchester and now based in London. I'm a passionate sports fan—especially football and Formula One—and regularly support Manchester United at Old Trafford. Outside of work, I enjoy cooking, theatre, comedy, and exploring new places, with a personal goal to try different cuisines across London using food blogs and reviews as my guide.",
      image: "./Images/football.jpeg",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="grid">
        {pageContent.map((section) => (
          <div key={section.id} className="about-section">
            <div
              className={`flip-card ${
                flippedCards[section.id] ? "flipped" : ""
              }`}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="card-content-front">
                    <h2 className="front-title">{section.title}</h2>
                    <button
                      className="flip-button-front"
                      onClick={() => handleFlip(section.id)}
                    >
                      {">"}
                    </button>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="card-content-back">
                    <h2 className="front-title">{section.title}</h2>
                    {section.id === 3 ? (
                      <ul className="skill">
                        {section.content.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="section-content">{section.content}</p>
                    )}
                    <button
                      className="flip-button-back"
                      onClick={() => handleFlip(section.id)}
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutMe;
