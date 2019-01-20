import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.js';
import InfoPanel from './InfoPanel.js';
import HintPanel from './HintPanel.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      score: 0,
      cells: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      gameOver: false,
      recommendedDirections: [0,0,0,0],
      autoPlayEnabled: false
    };
  }

  getBestMove(coeffs) {
    let maxIndex = -1;
    let maxVal = -1;

    for (let i = 0; i < coeffs.length; ++i) {
      if (coeffs[i] > maxVal) {
        maxVal = coeffs[i];
        maxIndex = i;
      }
    }

    return ["up", "right", "down", "left"][maxIndex];
  }

  playBestMove() {
    this.sendAction(this.getBestMove(this.state.recommendedDirections));
  }

  sendAction(action) {
    fetch('http://localhost:5000/play/'+action)
      .then((response) => (response.json()))
      .then((jsonData) => {
        this.setState({...this.state,
          score: jsonData.gameState.score,
          cells: jsonData.gameState.squares,
          gameOver: jsonData.gameState.game_over,
          recommendedDirections: jsonData.moves
        });

        if (!jsonData.gameState.game_over && this.state.autoPlayEnabled) {
          this.playBestMove();
        }
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
          <HintPanel recommendedDirections={this.state.recommendedDirections} bestMove={this.getBestMove(this.state.recommendedDirections)} />
          <Grid cells={this.state.cells} cellSize={"14vh"} />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <InfoPanel score={this.state.score} gameOver={this.state.gameOver} />
            <button className="button" onClick={() => {
              this.setState({...this.state, autoPlayEnabled: false});
              this.sendAction("new");
            }}>New Game</button>
            <button className="button"
              onClick={() => {
                this.setState({...this.state, autoPlayEnabled: !this.state.autoPlayEnabled});
                if (this.state.autoPlayEnabled)
                  this.playBestMove();
                }}
              style={{backgroundColor: this.state.autoPlayEnabled ? "#6e6" : "#e66"}}>
              Toggle AutoPlay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
