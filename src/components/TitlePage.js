import React from "react";

import "../styling/TitlePage.scss";
import GitHub from "../images/GitHub-Mark.png";
import LinkedIn from "../images/LinkedIn.png";

function TitlePage() {
  return (
    <div className='header-page'>
      <div className='logos'>
        <img className='logo' src={GitHub} />
        <img className='logo' src={LinkedIn} />
      </div>
      <div className='title'>
        <h1>Brandon Harrison</h1>
        <h2>Full-Stack Developer</h2>
      </div>
    </div>
  );
}

export default TitlePage;
