import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from './Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid cells={[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]} cellSize={"14vh"} />
      </div>
    );
  }
}

export default App;
