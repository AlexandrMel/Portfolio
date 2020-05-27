import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom'
import "./Navbar.css";

const Navbar = () => {
    const [changeClass, setChangeClass] = useState("")
    const [changeNavLoc, setChangeNavLoc] = useState("")
const burger = () => {
changeClass === "" ? setChangeClass("change") : setChangeClass("")
}
const NavRef = useRef();
// console.log(NavRef.current)
window.onscroll = function() {
    var sticky = NavRef.current.getBoundingClientRect()
    console.log(sticky)
    console.log(window.innerHeight)
    
  };


    return (
<nav>
<ul className="mobileNav" >
    <li className={changeClass === "change" ? "liHome" : ""}><a onClick={() => setChangeClass("")} style={{color: `${changeClass === "change" ? "white" : "black"}`}} href="#HomeTab">Home</a></li>
    <li className={changeClass === "change" ? "liAbout" : ""}><a onClick={() => setChangeClass("")} style={{color: `${changeClass === "change" ? "white" : "black"}`}} href="#AboutTab">About</a></li>
    <li className={changeClass === "change" ? "liProjects" : ""}><a onClick={() => setChangeClass("")} style={{color: `${changeClass === "change" ? "white" : "black"}`}} href="#ProjectsTab">Projects</a></li>
    <li className={changeClass === "change" ? "liContact" : ""}><a onClick={() => setChangeClass("")} style={{color: `${changeClass === "change" ? "white" : "black"}`}} href="#ContactTab">Contact</a></li>
</ul>
<ul className="desktopNav" >
    <li><a href="#HomeTab">Home</a></li>
    <li><a href="#AboutTab">About</a></li>
    <li><a href="#ProjectsTab">Projects</a></li>
    <li><a href="#ContactTab">Contact</a></li>
</ul>
<div ref={NavRef} className={`${changeClass} burger`} onClick={() => burger()}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
</nav>
    )
}
export default Navbar;