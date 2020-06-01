import React, { useState } from "react";
import "./About.css";
import AlexImg from "../images/Alex.jpg";
import Hightlight from "./Highlight";
import SkillContainer from "./SkillContainer";

const About = (props) => {
 
  return (
    <div id="AboutTab" className="AboutMainContainer">
      <div className="AboutHeader">
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          About
        </h2>
        <div
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
          className="AboutLine"
        ></div>
      </div>

      <div className="AboutSkills_Intro">
        <div className="AboutIntro ">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-once="true"
            className="AboutFrame"
          >
            <div className="AboutPic">
              <img src={AlexImg} />
            </div>

            <h2>Who am I ?</h2>
            <p>
              I am a highly motivated fullstack Web Developer, ready for new
              challenges. Building nice looking, easy to use, user-friendly
              websites and applications is truly a passion of mine. I always try
              to discover new technologies and stay up-to-date on industry
              trends and advancements.
            </p>
          </div>
        </div>
        <div className="SkillSet">
          <div className="AboutSkills">
            <h2>Tech Skills</h2>
            <div className="SkillArrContainer">
              {props.skillsArr.map((el, i) => (
                <SkillContainer obj={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="AboutMainHighlights">
        {props.highlights.map((el, i) => {
          return <Hightlight key={i} obj={el} id={i} />;
        })}
      </div>
    </div>
  );
};
export default About;
