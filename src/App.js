import React, { useState } from 'react';
import './styling/App.scss';

import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import TechnologiesPage from './components/TechnologiesPage'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import HiddenComponent from './components/HiddenComponent';

function App() {
  const [toggle, setToggle] = useState(false)

  const toggleModal = () => {
    setToggle(!toggle)
    console.log(toggle, 'tog')
  }

  return (
    <div className="App">
      <NavBar />
      <TitlePage />
      <About />
      <TechnologiesPage />
      <HiddenComponent toggle={toggle}/>
      <Projects toggleModal={toggleModal} />
      <Contact />
      {/* ↓ navigate to new page ↓ 😎 */}
    </div>
  );
}

export default App;
