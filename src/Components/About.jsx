import React, { useState } from "react";
import "./About.css";
import AlexImg from "../images/Alex.jpg";
import Hightlight from "./Highlight";
import SkillContainer from "./SkillContainer";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  const [highlights, SetHighlights] = useState([
    {
      img: "https://img.icons8.com/dotty/80/000000/idea.png",
      title: "CREATIVE",
      text: "I like trying new things, i like doing old things in a new way.",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/reorder.png",
      title: "ORGANIZED",
      text: "I like doing things step by step and having a road map with me.",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/rocket.png",
      title: "PRODUCTIVE",
      text: "I am dedicated to my work and focused on my deadlines.",
    },
    {
      img: "https://img.icons8.com/wired/80/000000/trophy.png",
      title: "MOTIVATED",
      text: "I always push beyond my comfort zone and never stop learning.",
    },
  ]);
  const [skillsArr, SetSkillsArr] = useState([
    {
      SkillName: "Javascript",
      percentage: "90%",
    },
    {
      SkillName: "ES6+Typescript",
      percentage: "80%",
    },
    {
      SkillName: "React + Redux",
      percentage: "87%",
    },
    {
      SkillName: "Node JS",
      percentage: "70%",
    },
    {
      SkillName: "Express JS",
      percentage: "75%",
    },
    {
      SkillName: "Databases",
      percentage: "70%",
    },
    {
      SkillName: "Git, Gitlab",
      percentage: "85%",
    },
    {
      SkillName: "Prototyping",
      percentage: "90%",
    },
    {
      SkillName: "Web Scraping",
      percentage: "90%",
    },
    {
      SkillName: "Ionic 5",
      percentage: "80%",
    },
    {
      SkillName: "PWA",
      percentage: "85%",
    },
    {
      SkillName: "Web Scraping",
      percentage: "80%",
    },
  ]);
  return (
    <div id="AboutTab" className="AboutMainContainer">
      <div className="AboutHeader">
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" >About</h2>
        <div data-aos="slide-right" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true" className="AboutLine"></div>
      </div>
     
      <div className="AboutSkills_Intro">
      <div className="AboutIntro ">
     <div data-aos="flip-right" data-aos-duration="1500" data-aos-once="true" className="AboutFrame" >
          <div className="AboutPic">
            <img src={AlexImg} />
          </div>

          <h2>Who am i ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            laborum consequuntur modi earum, necessitatibus iste harum unde
            numquam dicta sint iusto maxime itaque, dolores, consectetur ex
            aspernatur soluta. Nemo totam{" "}
          </p>
        </div>
        </div>
      <div className="SkillSet">
        <div className="AboutSkills">
          <h2>Tech Skills</h2>
          <div className="SkillArrContainer">
            {skillsArr.map((el, i) => (
              <SkillContainer obj={el} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="AboutMainHighlights">
        {highlights.map((el, i) => {
          return <Hightlight key={i} obj={el} id={i} />;
        })}
      </div>
    </div>
  );
};
export default About;
