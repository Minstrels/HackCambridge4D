import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.js';

class App extends Component {

  handleKeyPress(event) {
    if (event.keyCode === 37) {
      console.log("Left");
    }
    else if (event.keyCode === 38) {
      console.log("Up");
    }
    else if (event.keyCode === 39) {
      console.log("Right");
    }
    else if (event.keyCode === 40) {
      console.log("Down");
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div className="App" onKeyPress={(event) => this.handleKeyPress(event)}>
        <Grid cells={[[1024,512,32,2],[2048,8,128,64],[0,2,16,256],[4,2,4,2]]} cellSize={"14vh"} />
      </div>
    );
  }
}

export default App;
