import React from "react";
import "../styling/Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <a name='contact'>
      <div className='contact-container'>
        <h1>{'< Contact >'}</h1>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <span>brandon.s.harrison.01@gmail.com</span>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <span>linkedin.com/in/brandon-harrison-01/</span>
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <span>https://github.com/BrandonHarrison01</span>
      </div>
    </a>
  );
}

export default Contact;
