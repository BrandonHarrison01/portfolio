import React from "react";

import "../styling/TitlePage.scss";
import GitHub from "../images/GitHub-Mark.png";
import LinkedIn from "../images/LinkedIn.png";
import Resume from "../images/Resume.png";

function TitlePage() {
  return (
    <div className='header-page'>
      <div className='logos'>
        <a>
          <img className='logo' src={Resume} />
          <p>Resume</p>
        </a>
        <a href='https://github.com/BrandonHarrison01' target='_blank' >
          <img className='logo' src={GitHub} />
          <p>GitHub</p>
        </a>
        <a href='https://www.linkedin.com/in/brandon-harrison-01/' target='_blank' >
          <img className='logo' src={LinkedIn} />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className='title'>
        <h1>Brandon Harrison</h1>
        <h2>Full-Stack Developer</h2>
      </div>
    </div>
  );
}

export default TitlePage;
