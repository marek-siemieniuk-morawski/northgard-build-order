import React from 'react';
import logo from './northgard-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create <b>a build order</b> and save to share.
        </p>
        <a
          className="App-link"
          href="https://github.com/marek-siemieniuk-morawski/northgard-build-order"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
