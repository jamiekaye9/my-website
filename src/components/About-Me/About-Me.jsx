import { useState } from "react";
import "./About-Me.css";

const AboutMe = () => {
  const pageContent = [
    {
      id: 1,
      title: "Skills",
      content:
        "I am a recent graduate of the General Assembly Software Engineering Bootcamp — an intensive, 450+ hour program focused on full-stack development. Through lectures, labs, and multiple projects, I’ve built a portfolio of applications that demonstrate my versatility across a range of languages and frameworks. I’ve particularly enjoyed the challenge of solving complex problems and researching models and libraries to enhance both the performance and quality of my code. I'm now looking forward to continuing my development, learning from experienced engineers, and sharpening my skills in a full-time Software Engineering role.",
    },
    {
      id: 2,
      title: "Experience",
      content:
        "I bring four years of experience as a Business Analyst in both the luxury retail and legal sectors. During this time, I’ve worked on a variety of initiatives — from small-scale enhancements to major digital transformation programs — all within live, operational environments. This has equipped me with transferable skills essential to a Software Engineer, including a strong understanding of the project lifecycle, agile and waterfall methodologies, and effective stakeholder communication at all levels. I've also developed a keen interest in data, particularly around governance and quality — two aspects that have consistently proven critical to the success of integrations and platforms I've supported.",
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
      ]
    },
        {
      id: 4,
      title: "Personal",
      content:
        "I'm 26 years old, originally from Manchester and now based in London, UK. I’m a passionate sports fan — especially when it comes to football and Formula One — and I regularly support Manchester United at Old Trafford whenever I can. Outside of work, I enjoy cooking, exploring theatre and comedy events, and discovering new places. I’ve set myself the goal of trying different cuisines across London, using food blogs and reviews to guide my culinary adventures.",
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
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
      </div>
      {pageContent.map((section) => (
        <div key={section.id} className="about-section">
          <div className={`flip-card ${flippedCards[section.id] ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content">
                  <h2>{section.title}</h2>
                  <button className="flip-button" onClick={() => handleFlip(section.id)}>Flip</button>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="card-content">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                  <button className="flip-button" onClick={() => handleFlip(section.id)}>Flip</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default AboutMe;
