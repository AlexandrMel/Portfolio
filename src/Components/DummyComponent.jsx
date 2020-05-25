import React, { Component } from "react";
import Particles from "react-particles-js";
import "./DummyComponent.css";
import Image from '../images/image.gif'

class DummyComponent extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="MainWindowContainer">
        <Particles
          height={window.innerHeight}
          params={{
            particles: {
              line_linked: {
                color: "#FFFFFF",
              },
              number: {
                value: 70,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          style={{
            width: "100%",
            background: `#000000`,
          }}
        />
        <div className="MainText">
          <h2>Hi, I'm Alexandr Melnic</h2>
          <p> I am a full-stack Web Developer</p>
        </div>
        <div className="findMoreDiv">
          <h4>Find out more about me</h4>
        </div>{" "}
        <div><img className="MainGif" height="100px" width="100px" src={Image} /></div>
        </div>
      </React.Fragment>
    );
  }
}
export default DummyComponent;