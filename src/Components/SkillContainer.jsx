import React from "react";


const SkillContainer = (props) => {
    return (
        <div className="MainSkillContainer">
        <div className="SkillNameContainer">{props.obj.SkillName}</div>
        <div className="SkillBar">
          <div style={{width: `${props.obj.percentage}`}} className="SkillBarFill"></div>
        </div>
      </div>
    )
}
export default SkillContainer;