import React from 'react';
import './styling/App.scss';

import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import TechnologiesPage from './components/TechnologiesPage'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitlePage />
      <About />
      <TechnologiesPage />
      <Projects />
      <Contact />
      {/* ↓ navigate to new page ↓ 😎 */}
    </div>
  );
}

export default App;
