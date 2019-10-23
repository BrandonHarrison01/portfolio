import React from "react";
import "../styling/Contact.scss";

function Contact() {
  return (
    <a name='contact'>
      <h1>{'< Contact >'}</h1>
      <div className='contact-container'>
        <h2>email</h2>
        <h2>phone</h2>
        <h2>github</h2>
      </div>
    </a>
  );
}

export default Contact;
