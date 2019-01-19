import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      score: 0,
      cells: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    };
  }

  sendAction(action) {
    fetch('http://localhost:5000/play/'+action)
      .then((response) => (response.json()))
      .then((jsonData) => {
        this.setState({...this.state,
          score: jsonData.gameState.score,
          cells: jsonData.gameState.squares
        })
      });
  }

  handleKeyPress(event) {
    if (event.keyCode === 37) {
      this.sendAction("left");
    }
    else if (event.keyCode === 38) {
      this.sendAction("up");
    }
    else if (event.keyCode === 39) {
      this.sendAction("right");
    }
    else if (event.keyCode === 40) {
      this.sendAction("down");
    }
  }

  componentWillMount() {
    this.sendAction("new");
  }

  componentDidMount(){
    document.addEventListener("keydown", (event) => this.handleKeyPress(event), false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", (event) => this.handleKeyPress(event), false);
  }

  render() {
    return (
      <div className="App">
        <Grid cells={this.state.cells} cellSize={"14vh"} />
      </div>
    );
  }
}

export default App;
