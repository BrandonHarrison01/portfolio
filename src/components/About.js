import React from "react";

import "../styling/About.scss";

function About() {
  return (
    <div className='about-container'>
      <h1>{"< About Me >"}</h1>
      <div className='about-body'>
        <h2>
          Hi I'm Brandon!
          <br />
          I am a full-stack web developer
          <br />
          based in Midvale, Utah.
          <br />
          Please, take a look around!
        </h2>
        <p>
          I take great pride in quality work and really invest myself in my
          projects, I don't like to put my name on anything less than great. I
          believe a good Dev is adaptable, works well in teams, and is always
          willing to learn more to solve new challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
