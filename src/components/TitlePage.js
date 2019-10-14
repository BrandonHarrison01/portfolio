import React from "react";

import "../styling/TitlePage.scss";
import GitHub from "../images/logos/GitHub-Mark.png";
import LinkedIn from "../images/logos/LinkedIn.png";
import Resume from "../images/logos/Resume.png";

function TitlePage() {
  return (
    <div className='header-page'>
      <a name='home'>    </a>
        <div className='logos'>
          <a href='https://drive.google.com/file/d/1ZbMkz_vN34FQ1JZHuWOrif5exxZTRwcZ/view?usp=sharing' target='_blank' >
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
          <h2>Full-Stack Web Developer</h2>
        </div>
      </div>
  );
}

export default TitlePage;
