import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/About-Me/About-Me";
import Projects from "./components/Projects/Projects";
import Show from "./components/Show/Show";
import Contact from "./components/Contact/contact";
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
      imageWidthClass: "football-bingo",
      imageWidthClassShow: "football-bingo-show",
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
      imageWidthClass: "team-link",
      imageWidthClassShow: "team-link-show",
      link: "https://team-link-git-main-jamie-kayes-projects.vercel.app",
      gitLink: "https://github.com/jamiekaye9/team-link"
    },
    {
      id: 3,
      name: "Fix Hub",
      shortDescription:
        "IT Incident Management Application, allowing users to create, manage and analyse their IT incidents.",
      description:
        "This is an IT Incident Management Application. Users can sign up as either a 'Requestor' or 'Service Desk', determining their access within the app. Requestors can manage their own tickets and view all created incidents, while Service Desk users can reassign tickets, update statuses, and view those assigned to them. The app also features a dashboard with visual analytics.",
      build:
        "This solo project was built in one week and features a dashboard using the Recharts library to visually display open tickets by priority and status. I’m particularly proud of the role-based permissions system, which controls field access during ticket updates. A future enhancement would be implementing reference-based modeling to link users to companies, ensuring they only access tickets relevant to their organization.",
      img: "./Images/fix-hub logo.png",
      techUsed: "HTML, CSS, JSX, Express, React, MongoDB",
      backgroundColor: "#2F302F",
      imageWidthClass: "fix-hub",
      imageWidthClassShow: "fix-hub-show",
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
