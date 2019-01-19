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
      gameOver: false
    };
  }

  sendAction(action) {
    fetch('http://localhost:5000/play/'+action)
      .then((response) => (response.json()))
      .then((jsonData) => {
        this.setState({...this.state,
          score: jsonData.gameState.score,
          cells: jsonData.gameState.squares,
          gameOver: jsonData.gameState.game_over
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
        <div style={{width: "20vw", border: "5px solid white"}} />
        <Grid cells={this.state.cells} cellSize={"14vh"} />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <InfoPanel score={this.state.score} gameOver={this.state.gameOver} />
          <button className="button" onClick={() => this.sendAction("new")}>New Game</button>
        </div>
      </div>
    );
  }
}

export default App;
