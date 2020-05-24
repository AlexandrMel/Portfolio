import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu width="100%" {...props}>
      <div className="menu-item"><a href="/">
        Home
      </a></div>

      <div className="menu-item"><a href="/burgers">
        About
      </a></div>

      <div className="menu-item"><a href="/pizzas">
        Portfolio
      </a></div>

      <div className="menu-item"><a href="/desserts">
        Contact
      </a></div>
    </Menu>
  );
};
