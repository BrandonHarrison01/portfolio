import React from 'react';
import './styling/App.scss';

import NavBar from './components/NavBar'
import TitlePage from './components/TitlePage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitlePage />
    </div>
  );
}

export default App;
