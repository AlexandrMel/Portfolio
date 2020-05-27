import React from "react";
import "./App.css";
// import ParticlesBg from 'particles-bg';
import DummyComponent from "./Components/DummyComponent";
// import SideBar from './Sidebar'
// import './burger.css'
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import AOS from 'aos'
function App() {
  AOS.init()
  return (
    <React.Fragment>
      <div className="App">
        <DummyComponent />
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>

  );
}

export default App;
