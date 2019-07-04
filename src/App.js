import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tela from './tela';

function App() {
  return (
    <div className="App">
      <Tela />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
