import React from "react";
import "../styling/Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <a name='contact'>
      <div className='contact-container'>
        <h1>{'< Contact >'}</h1>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <span>brandon.s.harrison.01@gmail.com</span>
      </div>
    </a>
  );
}

export default Contact;
