import React from "react";

import "../styling/Projects.scss";

import keyConservation from "../images/screenshots/Key-Conservation.jpg";
import blackjackCounter from "../images/screenshots/BlackJack-Counter.jpg";
import forLifeFitness from "../images/screenshots/forLife-Fitness.png";
import guidr from "../images/screenshots/GUIDR.jpg";
import reactLogo from "../images/logos/React-Logo.png";
import reactNativeLogo from "../images/logos/React-Native-Logo.png";
import reduxLogo from "../images/logos/Redux-Logo.png";
import nodeLogo from "../images/logos/Node-Logo.png";
import sassLogo from "../images/logos/Sass-Logo.png";

function Projects(props) {
  return (
    <a name='projects'>
      <div className='projects'>
        <h1>{"< Projects >"}</h1>
        <p className='description'>
          Here are a few of my more significant projects. Please, feel free to
          play around!
        </p>
        <div className='cards'>
          <div className='project-card'>
            <img src={keyConservation} />
            <div className='project-info'>
              <h2>Key Conservation</h2>
              <p className='proj-desc'>
                Key Conservation is a mobile app built for a non-profit
                organization that helps supporters connect and donate to
                conservations more effortlessly.
              </p>
              <h3>Technologies Used:</h3>
              <div className='tech'>
                <div>
                  <img src={reactNativeLogo} />
                  <p>React Native</p>
                </div>
                <div>
                  <img src={reduxLogo} />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={nodeLogo} />
                  <p>Node.js</p>
                </div>
              </div>
              <div className='buttons'>
                <div>
                  <a
                    href='https://github.com/BrandonHarrison01/card-counter'
                    target='_blank'
                  >
                    GitHub
                  </a>
                  {/* <a href='https://blakjak-counter.netlify.com/' target='_blank'>
                    Deployed App
                  </a> */}
                </div>
                <p className='see-more' onClick={props.toggleModal}>
                  See More
                </p>
              </div>
            </div>
          </div>
          <div className='project-card'>
            <img src={guidr} />
            <div className='project-info'>
              <h2>GUIDR</h2>
              <p className='proj-desc'>
                Guidr is a mobile first application created for outdoor
                enthusiasts to document and share photos and entries of their
                outdoor adventures.
              </p>
              <h3>Technologies Used:</h3>
              <div className='tech'>
                <div>
                  <img src={reactLogo} />
                  <p>React</p>
                </div>
                <div>
                  <img src={reduxLogo} />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={sassLogo} />
                  <p>SCSS</p>
                </div>
              </div>
              <div className='buttons'>
                <div>
                  <a
                    href='https://github.com/guidr-bw/guidr-FE'
                    target='_blank'
                  >
                    GitHub
                  </a>
                  <a
                    href='https://nostalgic-cray-f6e949.netlify.com'
                    target='_blank'
                  >
                    App Link
                  </a>
                </div>
                <p className='see-more' onClick={props.toggleModal}>
                  See More
                </p>
              </div>
            </div>
          </div>
          <div className='project-card'>
            <img src={blackjackCounter} />
            <div className='project-info'>
              <h2>Blackjack Card Counter</h2>
              <p className='proj-desc'>
                The blackjack card counter is a web app designed for mobile use.
                The purpose of the app is to help the consumer practice their
                card counting skills.
              </p>
              <h3>Technologies Used:</h3>
              <div className='tech'>
                <div>
                  <img src={reactLogo} />
                  <p>React</p>
                </div>
                <div>
                  <img src={sassLogo} />
                  <p>SCSS</p>
                </div>
              </div>
              <div className='buttons'>
                <div>
                  <a
                    href='https://github.com/BrandonHarrison01/card-counter'
                    target='_blank'
                  >
                    GitHub
                  </a>
                  <a
                    href='https://blakjak-counter.netlify.com/'
                    target='_blank'
                  >
                    App Link
                  </a>
                </div>
                <p className='see-more' onClick={() => props.toggleModal('seven')}>
                  See More
                </p>
              </div>
            </div>
          </div>
          {/* <div className='project-card'>
            <div className='project-info'>
              <h2>forLife Fitness</h2>
              <p className='proj-desc'>
                forLife Fitness is a weight lifting journal used to help lifters
                track and document their success and progression.
              </p>
              <div className='buttons'>
                <div>
                  <a
                    href='https://github.com/bw-weight-lifting-journal/Front-end'
                    target='_blank'
                  >
                    GitHub
                  </a>
                  <a href='https://forlife-fitness.netlify.com/' target='_blank'>
                    Deployed App
                  </a>
                </div>
                <p className='see-more' onClick={props.toggleModal}>See More</p>
              </div>
            </div>
            <img src={forLifeFitness} />


          </div> */}
        </div>
      </div>
    </a>
  );
}

export default Projects;
