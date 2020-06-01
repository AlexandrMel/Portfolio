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
      title: "CV|FY",
      text: `CVFY is a fully functional CV and Cover Letter builder with templates and web scraping capabilities which allows you can import your data from other platforms and really customize your CV and Cover Letter, built in just 6 weeks by our Team, `,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
      liveDemo: "https://drive.google.com/file/d/1R9wHCFCQSp9yK05-WXK-kGYK8ApSohHp/view?usp=sharing",
    },
    {
      img: `${REFT360}`,
      title: "REFT360",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/REFT-360-",
      liveDemo: "https://reft360-65512.web.app/",
    },
    {
      img: `${Memories_App}`,
      title: "Memories App",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/Memories_App",
      liveDemo: "https://ionic-react-my-memories.web.app/",
    },
    {
      img: `${PigGame}`,
      title: "PIG Game",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/3_My_Fancy_DiceGame-Pig_Game-",
      liveDemo: "https://alexandrmel.github.io/3_My_Fancy_DiceGame-Pig_Game-/",
    },
    {
      img: `${MemoryGame}`,
      title: "Unsplash Memory Game",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/6_Memory_Game_Unsplash_Pic",
      liveDemo: "https://alexandrmel.github.io/6_Memory_Game_Unsplash_Pic/",
    },
    {
      img: `${CakeShop}`,
      title: "Cake Shop Website",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
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
