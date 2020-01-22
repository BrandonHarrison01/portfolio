import React from "react";
import "../styling/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import bitmoji from "../images/bitmoji.png";

function Contact() {
  return (
    <div className='contact-container'>
      <h1>{"< Contact >"}</h1>
      <div className='img-flex'>
        <div className='img-container'>
          <img src={bitmoji} alt='bitmoji character' />
        </div>
        <div className='info'>
          <a href='mailto: brandon.s.harrison.01@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
            <span>brandon.s.harrison.01@gmail.com</span>
          </a>
          <br />
          <a
            href='https://www.linkedin.com/in/brandon-harrison-01'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
            <span>linkedin.com/in/brandon-harrison-01</span>
          </a>
          <br />
          <a
            href='https://github.com/BrandonHarrison01'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
            <span>https://github.com/BrandonHarrison01</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
