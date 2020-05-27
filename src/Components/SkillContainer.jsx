import React from "react";


const SkillContainer = (props) => {
    return (
        <div className="MainSkillContainer">
        <div className="SkillNameContainer">{props.obj.SkillName}</div>
        <div className="SkillBar">
          <div style={{width: `${props.obj.percentage}`}} className="SkillBarFill" data-aos-duration="2000" data-aos-once="true" data-aos="slide-right"></div>
          {props.obj.percentage}
        </div>
      </div>
    )
}
export default SkillContainer;