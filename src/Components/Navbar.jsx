import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom'
import "./Navbar.css";

const Navbar = () => {
    const [changeClass, setChangeClass] = useState("")
    const [changeNavLoc, setChangeNavLoc] = useState("")
const burger = () => {
changeClass === "" ? setChangeClass("change") : setChangeClass("")
}

    return (
<nav >
    <div className={`${changeClass}`} onClick={() => burger()}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
</nav>
    )
}
export default Navbar;