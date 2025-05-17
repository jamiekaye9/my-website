import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/About-Me/About-Me";
import Projects from "./components/Projects/Projects";
import Show from "./components/Show/Show";
import "./App.css";

const App = () => {
  const projects = [
    {
      id: 1,
      name: "Football Bingo",
      shortDescription:
        "Bingo game where users have to match a football player to their nationality, club or position.",
      description:
        "This is a football based grid game. The aim is to select a box that matches either the current club, country or position of the randomly generated player. A correct selection will highlight the box green and an incorrect selection will highlight it red. If you successfully highlight all the boxes green, you win the game and get 'BINGO'. If you are unsuccessful, you will recieve a score that you can try and beat.",
      build:
        "This was an individual project, built in a 1 week period. I used the flex CSS method to create the grid layout of the game. I was especially proud of the way I randomise the grid each time the game is loaded, using the Fisher-Yates shuffle algorithm. A future improvement to this application would be to add a timer, allowing users to improve their speed as well as their score.",
      techUsed: "HTML, CSS, JavaScript",
      img: "./Images/footbingo.png",
      backgroundColor: "#2E0248",
      imageWdith: "300px",
      bigImageWidth: "400px",
      link: "https://jamiekaye9.github.io/football-bingo/",
      gitLink: "https://github.com/jamiekaye9/football-bingo"
    },
    {
      id: 2,
      name: "Team Link",
      shortDescription:
        "HR Management Application, allowing users to create, manage and analyse their workforce",
      description:
        "This is an HR Manage Application. Users are given the option to create or join a new company. Once assigned to a company, a user has the ability to create, update and delete their workforce. They can also view all the teams that have been inputted into the system, as well as the number of employees in each team. The application also has a finances dashboard that has some analysis of the companies finances.",
      build:
        "This was an individual project, built in a 1 week period. I used MongoDB to store the data and was especially proud of the way I used reference based modelling to create the link between users and companies. A future improvement to this application would be additional analytics on the finances dashboard, using charts to display the data.",
      techUsed: "HTML, CSS, JavaScript, Node.js, MongoDB, EJS",
      img: "./Images/team-link.png",
      backgroundColor: "#9161B8",
      imageWdith: "200px",
      bigImageWidth: "300px",
      link: "https://team-link-git-main-jamie-kayes-projects.vercel.app",
      gitLink: "https://github.com/jamiekaye9/team-link"
    },
    {
      id: 3,
      name: "Fix Hub",
      shortDescription:
        "IT Incident Management Application, allowing users to create, manage and analyse their IT incidents.",
      description:
        "This is an IT Incident Management Application. Users are able to select a job role of either 'Requestor' or 'Service Desk' when they sign up to the site. This decides which functionality they have access to throughout the application. Requestors can create, update and delete their incidents, as well as viewing all created tickets. Service Desk users have the ability to re-assign tickets, view all tickets assigned to them and update a ticket status. The app also includes a dashboard, presenting some analytics in chart form.",
      build:
        "This was an individual project, built in a 1 week period. I used the 'Recharts' libary to create a dashboard which gives users a visual analysis of open tickets by both priorty and status. I was especially proud of the way I designed the permissions of the application, using the user roles to determine which users can access certain fields when updating a ticket. A future improvement to this application would be to use reference based modelling to create a company and user relationship, allowing users to only see and work on tickets that are linked to their company.",
      img: "./Images/fix-hub logo.png",
      techUsed: "HTML, CSS, JSX, Express, React, MongoDB",
      backgroundColor: "#2F302F",
      imageWdith: "140px",
      showWidth: '200px',
      bigImageWidth: "200px",
      Link: "Coming Soon",
      gitLink: "https://github.com/jamiekaye9/fix-hub-front-end/blob/main/README.md"
    },
  ];

  return (
    <main className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/projects/:id" element={<Show projects={projects} />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default App;
