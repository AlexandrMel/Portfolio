import React, { Component } from "react";
import Particles from "react-particles-js";
import "./ParticleScreen.css";
import Image from '../images/image.gif'

class ParticleScreen extends Component {

  render() {

    return (
      <React.Fragment>
          <div id="HomeTab"className="MainWindowContainer">
        <Particles
          height={window.innerHeight}
          params={{
            particles: {
              line_linked: {
                color: "#FFFFFF",
              },
              number: {
                value: `${window.innerWidth < 500 ? 70 : 200}`,
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
          <p> I am a full-stack Web Developer based in Berlin, Germany</p>
        </div>
        <button className="findMoreDiv">
          <a href="#AboutTab"><h4>Find out more about me</h4></a>
        </button>{" "}
        <div><img className="MainGif" height="100px" width="100px" src={Image} /></div>
        </div>
      </React.Fragment>
    );
  }
}
export default ParticleScreen;
