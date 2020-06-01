import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import PigGame from "../images/PigGame.png";
import MemoryGame from "../images/Unsplash_Memory_Game.png";
import CakeShop from "../images/CakeShop.png";
import Memories_App from "../images/Memory_App.png";
import CVFY from "../images/CVFY.png";
import REFT360 from "../images/REFT360.png";

const Projects = (props) => {
  
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
          {props.projectsArr.map((el, i) => (
            <ProjectCard key={i} obj={el} id={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
