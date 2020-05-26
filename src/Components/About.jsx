import React, { useState } from "react";
import "./About.css";
import AlexImg from "../images/Alex.jpg";
import Hightlight from "./Highlight";
import SkillContainer from "./SkillContainer";

const About = () => {
  const [highlights, SetHighlights] = useState([
    {
      img: "https://img.icons8.com/dotty/80/000000/idea.png",
      title: "CREATIVE",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/reorder.png",
      title: "ORGANIZED",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/rocket.png",
      title: "PRODUCTIVE",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://img.icons8.com/dotty/80/000000/web-design.png",
      title: "RESPONSIVE",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);
  const [skillsArr, SetSkillsArr] = useState([
    {
      SkillName: "Javascript",
      percentage: "90%",
    },
    {
      SkillName: "React",
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
        <h2>About</h2>
        <div className="AboutLine"></div>
      </div>
     
      <div className="AboutSkills_Intro">
      <div className="AboutIntro">
        <div className="AboutFrame">
          <div className="AboutPic">
            <img src={AlexImg} />
          </div>

          <h2>Who am i?</h2>
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
          return <Hightlight key={i} obj={el} />;
        })}
      </div>
    </div>
  );
};
export default About;
