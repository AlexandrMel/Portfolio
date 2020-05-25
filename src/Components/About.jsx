import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="AboutTab" className="AboutMainContainer">
      <div className="AboutHeader">
        <h2>About</h2>
        <div className="AboutLine"></div>
      </div>
      <div className="AboutMainHighlights">
        <div className="CardContainer">
          <div className="icon">
            <img src="https://img.icons8.com/dotty/80/000000/idea.png" />
          </div>
          <div className="title">
            <h4>CREATIVE</h4>
          </div>
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="CardContainer">
          <div className="icon">
            <img src="https://img.icons8.com/dotty/80/000000/reorder.png" />
          </div>
          <div className="title">
            <h4>ORGANIZED</h4>
          </div>
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="CardContainer">
          <div className="icon">
            <img src="https://img.icons8.com/dotty/80/000000/rocket.png" />
          </div>
          <div className="title">
            <h4>PRODUCTIVE</h4>
          </div>
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="CardContainer">
          <div className="icon">
            <img src="https://img.icons8.com/dotty/80/000000/web-design.png" />
          </div>
          <div className="title">
            <h4>RESPONSIVE</h4>
          </div>
          <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      <div className="SkillSet">
        <div className="AboutSkills">
          <h2>Tech Skills</h2>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">CSS</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">HTML</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">REACT</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">JAVASCRIPT</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">NODE JS</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">MONGO DB</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">HTML</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
          <div className="MainSkillContainer">
            <div className="SkillNameContainer">HTML</div>
            <div className="SkillBar">
              <div className="SkillBarFill"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutIntro">
        <h2>Who am i?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          laborum consequuntur modi earum, necessitatibus iste harum unde
          numquam dicta sint iusto maxime itaque, dolores, consectetur ex
          aspernatur soluta. Nemo totam{" "}
        </p>
      </div>
    </div>
  );
};
export default About;
