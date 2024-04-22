import React from 'react';
import demoIslandsImage from './images/DemoIslands_1.png';
import VectorLogo from './images/Robots & Things Logo - Vector Version.png';
import GameLogo from './images/Robots & Things Logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <title>Robots & Things - By Plasma Shadow Studios</title>
      <header className="App-header">
      <img src={VectorLogo} className="logo" alt="logo" />        

      </header>

      <img src={demoIslandsImage} className="screenshot" alt="logo" />

      <p>
          This site is under construction. Check back later.
        </p>

    </div>
  );
}

export default App;
