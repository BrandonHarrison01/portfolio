import React from "react";

import "../styling/Projects.scss";

import blackjackCounter from "../images/screenshots/BlackJack-Counter.png";
import forLifeFitness from "../images/screenshots/forLife-Fitness.png";
import guidr from "../images/screenshots/GUIDR.png";

function Projects(props) {
  return (
    <div className='projects'>
      <h1>{"< Projects >"}</h1>
      <p className='description'>
        Here are a few of my more significant projects. Please, feel free to
        play around!
      </p>
      <div className='project-card'>
        <img src={blackjackCounter} />
        <div className='project-info'>
          <h2>Blackjack Card Counter</h2>
          <p>
            The blackjack card counter is a web app designed for mobile use. The
            purpose of the app is to help the consumer practice his/her card
            counting skills and develop an understanding on how card counting
            works.
          </p>
          <div className='buttons'>
            <div>
              <a
                href='https://github.com/BrandonHarrison01/card-counter'
                target='_blank'
              >
                GitHub
              </a>
              <a href='https://blakjak-counter.netlify.com/' target='_blank'>
                Link
              </a>
            </div>
            <button onClick={props.toggleModal}>See More.</button>
          </div>
        </div>
      </div>
      <div className='project-card'>
        <div className='project-info'>
          <h2>GUIDR</h2>
          <p>
            Guidr is a mobile first tool designed for outdoor enthusiasts to
            document and share their outdoor adventures. A user has the ability
            to share pictures and journal what happened on the adventure and how
            it went. On this project I did the front-end work using React and
            Redux, I also had the opportunity to work directly with a back-end
            dev as well as a UX designer.
          </p>
          <div className='buttons'>
            <div>
              <a href='https://github.com/guidr-bw/guidr-FE' target='_blank'>
                GitHub
              </a>
              <a
                href='https://nostalgic-cray-f6e949.netlify.com'
                target='_blank'
              >
                Link
              </a>
            </div>
            <button onClick={props.toggleModal}>See More</button>
          </div>
        </div>
        <img src={guidr} />
      </div>
      <div className='project-card'>
        <img src={blackjackCounter} />
        <div className='project-info'>
          <h2>Blackjack Card Counter</h2>
          <p>
            The blackjack card counter is a web app designed for mobile use. The
            purpose of the app is to help the consumer practice his/her card
            counting skills and develop an understanding on how card counting
            works.
          </p>
          <div className='buttons'>
            <div>
              <a
                href='https://github.com/BrandonHarrison01/card-counter'
                target='_blank'
              >
                GitHub
              </a>
              <a href='https://blakjak-counter.netlify.com/' target='_blank'>
                Link
              </a>
            </div>
            <button onClick={props.toggleModal}>See More.</button>
          </div>
        </div>
      </div>
      <div className='project-card'>
        <div className='project-info'>
          <h2>forLife Fitness</h2>
          <p>
            forLife Fitness is a weight lifting journal used to help lifters
            track and document their success and progression. This was a build
            week project where I was put on a team of developers to produce this
            app in a week. I was the head front-end dev and had the opportunity
            to work with a back-end dev, a UX Designer, and I had a less
            experienced front-end dev I was able to teach.
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
                Link
              </a>
            </div>
            <button onClick={props.toggleModal}>See More.</button>
          </div>
        </div>
        <img src={forLifeFitness} />
      </div>
    </div>
  );
}

export default Projects;
