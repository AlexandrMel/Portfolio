import React from "react";


const Hightlight = (props) => {
  let delay = parseInt(props.id) * 400
  console.log(delay)
    return (
        <div data-aos="zoom-in" data-aos-delay={delay.toString()} data-aos-once="true" data-aos-duration="1000" className="CardContainer">
        <div className="icon">
          <img src={props.obj.img} />
        </div>
        <div className="title">
    <h4>{props.obj.title}</h4>
        </div>
        <div className="text">
    <p>{props.obj.text}</p>
        </div>
      </div>
    )
}
export default Hightlight;