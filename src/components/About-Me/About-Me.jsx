import { useState } from "react";
import "./About-Me.css";

const AboutMe = () => {
  const pageContent = [
    {
      id: 1,
      title: "Software Engineering",
      content:
        "I recently completed General Assembly’s 450+ hour Software Engineering Bootcamp, an intensive program focused on full-stack development. Through hands-on labs, lectures, and real-world projects, I built a portfolio that showcases my ability to work across multiple languages, frameworks, and problem-solving challenges.",
      image: "./Images/software-engineer.png",
    },
    {
      id: 2,
      title: "Experience",
      content:
        "I have four years of experience as a Business Analyst in the luxury retail and legal sectors, working on projects from minor enhancements to large-scale digital transformations. This has given me a strong grasp of the project lifecycle, agile and waterfall methods, and effective stakeholder communication, along with a keen interest in data governance and quality.",
      image: "./Images/experience.png",
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
      image: "./Images/skills.png",
    },
    {
      id: 4,
      title: "Personal",
      content:
        "I'm 26, originally from Manchester and now based in London. I'm a passionate sports fan—especially football and Formula One—and regularly support Manchester United at Old Trafford. Outside of work, I enjoy cooking, theatre, comedy, and exploring new places, with a personal goal to try different cuisines across London using food blogs and reviews as my guide.",
      image: "./Images/hobbies.png",
    },
  ];

  const [content, setContent] = useState(null)




  return (
    <main className="about-container">
      <section className="about-header">
        <h1 className="about-title">About Me</h1>
      </section>
      <section className="about-content">
        <div className="grid">
        {pageContent.map((section) => (
            <div className="about-card" onClick={() => setContent(section)}>
            <h2 className="section-title">{section.title}</h2>
            <img
              className="section-image"
              src={section.image}
              alt={section.title}
            />
            </div>
        ) )}
        </div>
        <div className="card-content">
  {content ? (
    <>
      <h2 className="content-title">{content.title}</h2>
      {Array.isArray(content.content) ? (
        <ul className="content-skills">
          {content.content.map((skill, i) => (
            <li key={i} className="skill">{skill}</li>
          ))}
        </ul>
      ) : (
        <p className="content-para">{content.content}</p>
      )}
    </>
  ) : (
    <p className="content-title">Click a card to see more.</p>
  )}
</div>
      </section>


    </main>
  );
};

export default AboutMe;
