import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import DummyComponent from './DummyComponent';
import SideBar from './Sidebar'
import './burger.css'
import About from './Components/About';

function App() {
  return (
    <React.Fragment>
      <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    {/* <div style={{backgroundColor: "black", height: "100%", display: "flex", justifyContent: "center", alignContent: "center"}}>
    <ParticlesBg color="red" num={20} type="cobweb" bg={true} />
    <h1>Title</h1>
    </div> */}

    <div id="page-wrap" style={{height:"100%"}}>

    <DummyComponent />
    <About />
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;