import React, { Component } from 'react';
import logo from './sola.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <img src={logo} className="hide-on-mobile" alt="logo" />
          <img src={logo} className="hide-on-mobile hide-on-medium" alt="logo" />
          <img src={logo} className="hide-on-mobile hide-on-medium" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
