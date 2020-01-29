import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../styling/TitlePage.scss";

function TitlePage() {
  return (
    <div className='header-page'>
      <div className='logos'>
        <a
          href='https://drive.google.com/open?id=1HEN6aegKNh5Fe7dDDduwy4VdG0uWupX0'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faFile} size='2x' className='logo' />
          <p>Resume</p>
        </a>
        <a href='https://github.com/BrandonHarrison01' rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' className='logo' />
          <p>GitHub</p>
        </a>
        <a
          href='https://www.linkedin.com/in/brandon-harrison-01/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='logo' />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className='title'>
        <h1>Brandon Harrison</h1>
        <h2>Full-Stack Web Developer</h2>
      </div>
    </div>
  );
}

export default TitlePage;
