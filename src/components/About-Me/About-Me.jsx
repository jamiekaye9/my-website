import { useState } from "react";

const AboutMe = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
      <div className="row  d-flex flex-column justify-content-center align-items-center">
        <div className="col-10 col-md-12 d-flex flex-column justify-content-center align-items-center gap-4 mb-5">
          <h1 className="display-4">About Me</h1>
          <p className="text-center">After four years working as a Business Analyst, I developed a deep interest in 
            how software is created, designed, and integrated—particularly the role that data 
            quality and structure play in building effective systems. This curiosity led me 
            to make a career change into software engineering, enrolling in General Assembly’s 
            immersive Software Engineering Bootcamp. During the course, I gained a strong 
            foundation in programming and applied my learning through four hands-on projects, 
            using a range of technologies across both front-end and back-end development. 
            Now that I’ve completed the program, I’m focused on sharpening and expanding my 
            skills as I actively pursue my first role in the industry. I'm excited to contribute 
            to real-world products and continue growing as a developer by building on everything 
            I’ve learned so far.
          </p>
        </div>
      </div>
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="card col-11 col-md-12 rounded-4 border-2 mb-5">
          <div className="card-body">
            <h3 className="card-title text-center mb-4 display-6">Skills</h3>
            <ul className="d-flex flex-row card-text align-items-center justify-content-center flex-wrap list-unstyled gap-4">
              <li  className="d-flex flex-column align-items-center flex-wrap">
                <img src="./Images/html.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">HTML</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/css.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">CSS</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/js.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">JavaScript</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/react.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">React</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/node.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Node.js</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/mongodb.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">MongoDB</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/express.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Express</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/python.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Python</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/github.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Git</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/bootstrap.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Bootstrap</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/jira.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Jira</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/devops.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">DevOps</p>
              </li>
              <li  className="d-flex flex-column align-items-center">
                <img src="./Images/django.png" alt="" style={{ width: '45px' }} />
                <p className="fs-6">Django</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
