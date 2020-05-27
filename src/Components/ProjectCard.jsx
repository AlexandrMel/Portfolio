import React from "react";

const ProjectCard = (props) => {
  const delay = props.id * 300;
  return (
    <div data-aos="fade-up" data-aos-delay={delay} data-aos-once="true" data-aos-duration="1000" className="ProjectCard">
      <div className="ProjectCardImg">
        <img src={props.obj.img} />
      </div>
      <div className="ProjectCardText">
        <h2>{props.obj.title}</h2>
        <hr />
        <p>{props.obj.text}</p>
        <a href={props.obj.github}>Github</a>
      </div>
    </div>
  );
};
export default ProjectCard;
