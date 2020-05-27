import React from "react";
import "./Contact.css";
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

const Contact = () => {
  return (
    <div id="ContactTab" className="ContactMainContainer">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="white"></path>
      </svg>
      <div className="ContactWrapper">
      <div className="ContactHeader">
        <h2>Contact</h2>
        <div className="ContactLine"></div>
      </div>
      <div className="ContactText">
        <h3>Want to get in touch?</h3>
      </div>
      <div className="ContactForm">
        <form>
          <input type="text" placeholder="Type in your Name" />
          <input type="email" placeholder="Type in your Email" />
          <textarea placeholder="Type in your Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="ContactSocialMedia">
        <h4>You can contact me also via Social Media!</h4>
        <div className="ContactSocialIcons">
          <a href="#"><img src={Linkedin} /></a>{" "}
          <a href="#"><img src={Github} /></a>
          <a href="#"><img src={Facebook} /></a>
        </div>
        <h5>Alexandr Melnic  &#9400;</h5>
      </div>
      </div>
    </div>
  );
};
export default Contact;
