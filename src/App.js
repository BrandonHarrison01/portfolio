// USE YARN 🤠

import React, { useState } from "react";
import "./styling/App.scss";

// components
import NavBar from "./components/NavBar";
import TitlePage from "./components/TitlePage";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import HiddenComponent from "./components/HiddenComponent";

//background images
import midvaleMtn from "./images/backgrounds/midvale-mtn-min.JPG";

function App() {
  const [toggle, setToggle] = useState(false);
  const [populateModal, setPopulateModal] = useState();

  const toggleModal = argument => {
    setToggle(true);
    setPopulateModal(argument);
  };

  const toggleModalOff = () => {
    setToggle(false);
  };

  return (
    <div className='App'>
      <img
        className='background'
        src={midvaleMtn}
        alt='background'
      />
      <NavBar />
      <TitlePage />
      <About />
      {populateModal ? (
        <HiddenComponent
          toggle={toggle}
          populateModal={populateModal}
          toggleModalOff={toggleModalOff}
        />
      ) : (
        ""
      )}
      <Projects toggleModal={toggleModal} />
      <Contact />
    </div>
  );
}

export default App;
