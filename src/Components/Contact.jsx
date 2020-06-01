import React from "react";
import "./Contact.css";
import Facebook from "../images/facebook.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Alex_logo from "../images/Alex_logo2.png";

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
          <h2
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Contact
          </h2>
          <div className="ContactLine"></div>
        </div>
        <div className="ContactText">
          <h3
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Want to get in touch?
          </h3>
        </div>
        <div className="ContactForm">
          <form action="https://mailthis.to/AlexandrMel" method="POST">
            <input
              name="name"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
              type="text"
              placeholder="Type in your Name"
            />
            <input
              name="_replyto"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
              type="email"
              placeholder="Type in your Email"
            />
            <textarea
              name="message"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-once="true"
              data-aos-duration="1000"
              placeholder="Type in your Message"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-once="true"
              data-aos-duration="1000"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="ContactSocialMedia">
          <h4
            data-aos="flip-up"
            data-aos-delay="2000"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            You can contact me also via Social Media!
          </h4>
          <div className="ContactSocialIcons">
            <a
              data-aos="flip-up"
              data-aos-delay="2200"
              data-aos-once="true"
              data-aos-duration="1000"
              target="_blank"
              href="https://www.linkedin.com/in/alexandrmelnic/"
            >
              <img src={Linkedin} />
            </a>{" "}
            <a
              data-aos="flip-up"
              data-aos-delay="2700"
              data-aos-once="true"
              data-aos-duration="1000"
              target="_blank"
              href="https://github.com/AlexandrMel"
            >
              <img src={Github} />
            </a>
            <a
              data-aos="flip-up"
              data-aos-delay="3000"
              data-aos-once="true"
              data-aos-duration="1000"
              target="_blank"
              href="https://www.facebook.com/alexandr.melnic"
            >
              <img src={Facebook} />
            </a>
          </div>
          <img height="50px" src={Alex_logo} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
