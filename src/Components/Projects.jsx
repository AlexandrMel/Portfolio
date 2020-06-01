import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import PigGame from "../images/PigGame.png";
import MemoryGame from "../images/Unsplash_Memory_Game.png";
import CakeShop from "../images/CakeShop.png";
import Memories_App from "../images/Memory_App.png";
import CVFY from "../images/CVFY.png";
import REFT360 from "../images/REFT360.png";

const Projects = () => {
  const [projectsArr, SetProjectsArr] = useState([
    {
      img: `${CVFY}`,
      title: "CV|FY Platform",
      text: `CVFY is a fully functional CV and Cover Letter builder with templates and web scraping capabilities. It allows users to import their data from other platforms and really customize their CV and Cover Letter. It was built in just 6 weeks. `,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
      liveDemo: "https://drive.google.com/file/d/1R9wHCFCQSp9yK05-WXK-kGYK8ApSohHp/view?usp=sharing",
    },
    {
      img: `${REFT360}`,
      title: "REFT|360 App",
      text: `REFT360 is a Real time feedback tool app designed for employees. You can easily customize feedback requests and give specific and structured feedback. The app is a PWA build with Ionic 5 framework and it is still in development`,
      github: "https://github.com/AlexandrMel/REFT-360-",
      liveDemo: "https://reft360-65512.web.app/",
    },
    {
      img: `${Memories_App}`,
      title: "Memories App",
      text: `Memories App is a small app that allows you to save memories, good and bad ones. It is also a PWA built with Ionic 5 and React and takes advantage of native features like Camera and device storage `,
      github: "https://github.com/AlexandrMel/Memories_App",
      liveDemo: "https://ionic-react-my-memories.web.app/",
    },
    {
      img: `${PigGame}`,
      title: "PIG Game",
      text: `PIG Game is from a family of dice games described as "jeopardy dice games". The dominant type of decision is whether or not to jeopardize previous gains by rolling for potential greater gains. It is made with Javascript and DOM Manipulations`,
      github: "https://github.com/AlexandrMel/3_My_Fancy_DiceGame-Pig_Game-",
      liveDemo: "https://alexandrmel.github.io/3_My_Fancy_DiceGame-Pig_Game-/",
    },
    {
      img: `${MemoryGame}`,
      title: "Unsplash Memory Game",
      text: `Unsplash Memory Game is a classic memory game. You can generate different pictures for the game using the Unsplash API. It is build with React`,
      github: "https://github.com/AlexandrMel/6_Memory_Game_Unsplash_Pic",
      liveDemo: "https://alexandrmel.github.io/6_Memory_Game_Unsplash_Pic/",
    },
    {
      img: `${CakeShop}`,
      title: "Cake Shop Website",
      text: `Cake Shop Website is a website template for a Cake Shop which i did for a colleague. It is a simple static website built with Javascript and DOM Manipulations`,
      github: "https://github.com/AlexandrMel/5_My_CakeShop_Project",
      liveDemo: "https://alexandrmel.github.io/5_My_CakeShop_Project/",
    },
  ]);
  return (
    <div className="ProjectsWrapper">
      <div id="ProjectsTab" className="ProjectsMainContainer">
        <div className="ProjectsHeader">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Projects
          </h2>
          <div
            data-aos="slide-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-once="true"
            className="ProjectsLine"
          ></div>
        </div>
        <div className="ProjectsList">
          {projectsArr.map((el, i) => (
            <ProjectCard key={i} obj={el} id={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
