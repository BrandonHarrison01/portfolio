import React, { useState } from 'react';
import './styling/App.scss';

import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import HiddenComponent from './components/HiddenComponent';

function App() {
  const [toggle, setToggle] = useState(false)
  const [populateModal, setPopulateModal] = useState()

  const toggleModal = (argument) => {
    setToggle(true)
    setPopulateModal(argument)
  }

  const toggleModalOff = () => {
    setToggle(false)
  }

  return (
    <div className="App">
      <NavBar />
      <TitlePage />
      <About />
      {populateModal ? <HiddenComponent toggle={toggle} populateModal={populateModal} toggleModalOff={toggleModalOff} /> : ''}
      <Projects toggleModal={toggleModal} />
      <Contact />
      {/* ↓ navigate to new page ↓ 😎 */}
    </div>
  );
}

export default App;
