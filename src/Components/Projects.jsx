import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

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
