import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.js';
import InfoPanel from './InfoPanel.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      score: 0,
      cells: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      gameOver: false,
      recommendedDirection: "Up"
    };
  }

  getDirectionString(directionVal) {
    if (45 <= directionVal && directionVal < 135) {
      return "Right";
    }
    else if (135 <= directionVal && directionVal < 225) {
      return "Down";
    }
    else if (225 <= directionVal && directionVal < 315) {
      return "Left";
    }
    else {
      return "Up";
    }
  }

  sendAction(action) {
    fetch('http://localhost:5000/play/'+action)
      .then((response) => (response.json()))
      .then((jsonData) => {
        this.setState({...this.state,
          score: jsonData.gameState.score,
          cells: jsonData.gameState.squares,
          gameOver: jsonData.gameState.game_over,
          recommendedDirection: this.getDirectionString(jsonData.gameState.direction)
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
        <div className="App-title-div">
          <label className="App-title">Probably 2048, Maybe?</label>
        </div>

        <div className="App-main-panels">
          <div style={{width: "20vw", border: "5px solid white"}} />
          <Grid cells={this.state.cells} cellSize={"14vh"} />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <InfoPanel score={this.state.score} gameOver={this.state.gameOver} recommendedDirection={this.state.recommendedDirection} />
            <button className="button" onClick={() => this.sendAction("new")}>New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
