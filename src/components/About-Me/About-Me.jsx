import { useState } from "react";
import "./About-Me.css";

const AboutMe = () => {
  return (
    <main className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I am a Software Developer with a strong passion for building and
          maintaining clean, responsive and user-focused applications. I have
          completed a 450+ hour full-stack development bootcamp, getting hands
          on experience with modern technologies and frameworks. I look forward
          to using this knowledge, as well as my three years experience as a
          Business Analyst, to help clients realise their technological visions.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-box-skills">
            <h2 className="box-title">Skills</h2>
            <p className="box-content">These are my skills</p>
        </div>
        <div className="about-box-experience">
            <h2 className="box-title">Experience</h2>
            <p className="box-content">This is my experience</p>
        </div>
        <div className="about-box-personal">
            <h2 className="box-title">Personal</h2>
            <p className="box-content">This is my personal information</p>
        </div>
      </div>
    </main>
  );
};


export default AboutMe;
