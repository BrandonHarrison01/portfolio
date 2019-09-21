import React from 'react';
import './styling/App.scss';

import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'
import TechnologiesPage from './components/TechnologiesPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitlePage />
      <TechnologiesPage />
    </div>
  );
}

export default App;
