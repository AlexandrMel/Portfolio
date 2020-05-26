import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [projectsArr, SetProjectsArr] = useState([
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
    {
      img:
        "https://i.pinimg.com/originals/38/86/d0/3886d0da5c3b2ec90b9b037d1ba10d9a.jpg",
      title: "CV|FY",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
      distinctio neque animi, doloremque laboriosam nobis illo provident
      itaque molestias omnis.`,
      github: "https://github.com/AlexandrMel/1_CV_FY_Project",
    },
  ]);
  return (
    <div id="ProjectsTab" className="ProjectsMainContainer">
      <div className="ProjectsHeader">
        <h2>Projects</h2>
        <div className="ProjectsLine"></div>
      </div>
      <div className="ProjectsList">
       {projectsArr.map((el, i) => (<ProjectCard key={i} obj={el} />))}
      </div>
    </div>
  );
};

export default Projects;
