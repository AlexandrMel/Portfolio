import React from "react";


const Hightlight = (props) => {
    return (
        <div className="CardContainer">
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