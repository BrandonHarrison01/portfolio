import React from "react";

import CSSIcon from "../images/logos/CSS-Logo.png";
import HTMLIcon from "../images/logos/HTML-Logo.png";
import JSIcon from "../images/logos/JS-Logo.png";
import NodeIcon from "../images/logos/Node-Logo.png";
import ReactIcon from "../images/logos/React-Logo.png";
import ReactNativeIcon from "../images/logos/React-Native-Logo.png";
import ReduxIcon from "../images/logos/Redux-Logo.png";
import SassIcon from "../images/logos/Sass-Logo.png";
import SQLIcon from "../images/logos/SQL-Logo.png";

import "../styling/TechnologiesPage.scss";

function TechnologiesPage() {
  return (
    <a name="technologies">
      <div className="nav-wrapper">
        <div className='tech-page'>
          <h1>{"< My Tech Stack >"}</h1>
          <h2>
            My goal as a dev is to be adaptable. These are the technologies I am
            most comfortable with, but I'm always willing to learn!
          </h2>
          <div className='tech'>
            <div>
              <img src={HTMLIcon} />
              <p>HTML</p>
            </div>
            <div>
              <img src={SassIcon} />
              <p>CSS/LESS/SASS</p>
            </div>
            <div>
              <img src={JSIcon} />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={ReactIcon} />
              <p>React</p>
            </div>
            <div>
              <img src={ReactNativeIcon} />
              <p>React Native</p>
            </div>
            <div>
              <img src={ReduxIcon} />
              <p>Redux</p>
            </div>
            <div>
              <img src={NodeIcon} />
              <p>Node.js</p>
            </div>
            <div>
              <img src={SQLIcon} />
              <p>SQL</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default TechnologiesPage;
