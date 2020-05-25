import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="ContactMainContainer"
  >
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="svgcolor-light"
    >
      <path
        d="M0 0 L50 100 L100 0 Z"
        fill="#f5f5f5"
        stroke="white"
      ></path>
    </svg>
    <div className="ContactHeader">
        <h2>Contact</h2>
        <div className="ContactLine"></div>
      </div>
  </div>
  )

}
export default Contact;