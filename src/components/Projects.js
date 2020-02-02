import React from "react";

import "../styling/Projects.scss";

import { desc } from "../ProjectDescription";

import keyConservation from "../images/screenshots/Key-Conservation.jpg";
import blackjackCounter from "../images/screenshots/BlackJack-Counter.jpg";
import forLifeFitness from "../images/screenshots/forLife-Fitness-cropped.png";
import guidr from "../images/screenshots/GUIDR.jpg";
import reactLogo from "../images/logos/React-Logo.png";
import reactNativeLogo from "../images/logos/React-Native-Logo.png";
import reduxLogo from "../images/logos/Redux-Logo.png";
import nodeLogo from "../images/logos/Node-Logo.png";
import sassLogo from "../images/logos/Sass-Logo.png";
import bootstrapLogo from "../images/logos/Bootstrap-Logo.png";
import formikLogo from "../images/logos/Formik-Logo.PNG";

function Projects(props) {
  return (
    <div className='projects'>
      <div className='wrapper'>
        <h1>{"< Projects >"}</h1>
      </div>
      <div className='cards'>
        <div className='project-card'>
          <img
            src={keyConservation}
            className='screenshot'
            alt='key conservation screenshot'
          />
          <div className='project-info'>
            <h2>Key Conservation</h2>
            <p className='proj-desc'>
              Key Conservation is a mobile application built for a non-profit
              organization that helps supporters connect and donate to
              conservations more effortlessly.
            </p>
            <h3>Technologies Used:</h3>
            <div className='tech'>
              <div>
                <img src={reactNativeLogo} alt='react native logo' />
                <p>React Native</p>
              </div>
              <div>
                <img src={reduxLogo} alt='redux logo' />
                <p>Redux</p>
              </div>
              <div>
                <img src={nodeLogo} alt='node logo' />
                <p>Node.js</p>
              </div>
            </div>
            <div className='buttons'>
              <div>
                <a
                  className='github'
                  href='https://github.com/Lambda-School-Labs/key-conservation-mobile'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  GitHub
                </a>
                {/* <a href='https://blakjak-counter.netlify.com/' target='_blank'>
                  Deployed App
                </a> */}
              </div>
              <p
                className='see-more'
                onClick={() => props.toggleModal(desc[0])}
              >
                See More
              </p>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={guidr} className='screenshot' alt='guidr screenshot' />
          <div className='project-info'>
            <h2>GUIDR</h2>
            <p className='proj-desc'>
              Guidr is a mobile first web application created for outdoor
              enthusiasts to document and share photos and entries of their
              outdoor adventures.
            </p>
            <h3>Technologies Used:</h3>
            <div className='tech'>
              <div>
                <img src={reactLogo} alt='react logo' />
                <p>React</p>
              </div>
              <div>
                <img src={reduxLogo} alt='redux logo' />
                <p>Redux</p>
              </div>
              <div>
                <img src={sassLogo} alt='scss logo' />
                <p>SCSS</p>
              </div>
            </div>
            <div className='buttons'>
              <div>
                <a
                  className='github'
                  href='https://github.com/guidr-bw/guidr-FE'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  GitHub
                </a>
                <a
                  href='https://nostalgic-cray-f6e949.netlify.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  App Link
                </a>
              </div>
              <p
                className='see-more'
                onClick={() => props.toggleModal(desc[1])}
              >
                See More
              </p>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img
            src={blackjackCounter}
            className='screenshot'
            alt='blackjack counter logo'
          />
          <div className='project-info'>
            <h2>Blackjack Card Counter</h2>
            <p className='proj-desc'>
              The blackjack card counter is a web app designed for mobile use.
              The purpose of the app is to help the consumer practice their card
              counting skills.
            </p>
            <h3>Technologies Used:</h3>
            <div className='tech'>
              <div>
                <img src={reactLogo} alt='react logo' />
                <p>React</p>
              </div>
              <div>
                <img src={sassLogo} alt='scss logo' />
                <p>SCSS</p>
              </div>
            </div>
            <div className='buttons'>
              <div>
                <a
                  className='github'
                  href='https://github.com/BrandonHarrison01/card-counter'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  GitHub
                </a>
                <a
                  href='https://blakjak-counter.netlify.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  App Link
                </a>
              </div>
              <p
                className='see-more'
                onClick={() => props.toggleModal(desc[2])}
              >
                See More
              </p>
            </div>
          </div>
        </div>
        <div className='project-card desktop'>
          <img
            className='screenshot desktop-img'
            src={forLifeFitness}
            alt='forLife fitness logo'
          />
          <div className='project-info'>
            <h2>forLife Fitness</h2>
            <div className='info-flex'>
              <p className='proj-desc'>
                forLife Fitness is a weight lifting journal used to help lifters
                track and document their success and progression.
              </p>
              <div>
                <h3>Technologies Used:</h3>
                <div className='tech'>
                  <div>
                    <img src={reactLogo} alt='react logo' />
                    <p>React</p>
                  </div>
                  <div>
                    <img src={sassLogo} alt='scss logo' />
                    <p>SCSS</p>
                  </div>
                  <div>
                    <img src={bootstrapLogo} alt='bootstrap logo' />
                    <p>reactstrap</p>
                  </div>
                  <div>
                    <img src={formikLogo} alt='formik logo' />
                    <p>Formik</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <div>
                <a
                  className='github'
                  href='https://github.com/bw-weight-lifting-journal/Front-end'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  GitHub
                </a>
                <a
                  href='https://forlife-fitness.netlify.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  App Link
                </a>
              </div>
              <p
                className='see-more'
                onClick={() => props.toggleModal(desc[3])}
              >
                See More
              </p>
            </div>
          </div>

          {/* need to check screen width and conditionally change classname between cropped and uncropped */}

          {/* <img className='desktop-img' src={forLifeFitness   👌 cropped   } /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
