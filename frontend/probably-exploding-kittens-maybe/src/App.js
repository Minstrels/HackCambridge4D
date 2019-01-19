import React, { Component } from 'react';
import './App.css';

import LogPane from './LogPane.js';
import PlayerCardsPane from './PlayerCardsPane.js';
import DeckPane from './DeckPane.js';
import OtherPlayersPane from './OtherPlayersPane.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      cardsRemaining: 0,
      playerData: [],
      eventsLog: [],
      playerCards: []
    };

    this.getInitialState();
  }

  getInitialState() {
    this.state = {...this.state,
      cardsRemaining: 52,
      playerData: [
        {
          name: "CPU 1",
          nCards: 5
        },
        {
          name: "CPU 2",
          nCards: 5
        }
      ],
      eventsLog: ["CPU 1 drew a card", "You drew a card"],
      playerCards: ["Sample", "Sample 2"]
    };

    this.setState(this.state);
  }

  playCard(cardName) {
    console.log(cardName);

    let serverResponse = {
      states: [
        {
          cardsRemaining: 30,
          playerData: [
            {
              name: "CPU 1",
              nCards: 3
            },
            {
              name: "CPU 2",
              nCards: 5
            }
          ],
          eventsLog: [],
          playerCards: ["Sample", "Sample 2"]
        },
        {
          cardsRemaining: 29,
          playerData: [
            {
              name: "CPU 1",
              nCards: 3
            },
            {
              name: "CPU 2",
              nCards: 5
            }
          ],
          eventsLog: ["CPU 1 drew a card", "CPU 1 played a card"],
          playerCards: ["Sample", "Sample 2"]
        }
      ]
    }

    let app = this;

    function visitStates(i) {
      if (i > serverResponse.states.length) return;

      setTimeout(function () {

          app.setState({...this.state, ...(serverResponse.states[i])});

          visitStates(++i);

      }, i === 0 ? 0 : 1000);
    }

    visitStates(0);
  }

  render() {
    console.log("Rendering...");

    return (
      <div className="App">
        <div className="App-top-panes">
          <div style={{width: "30%", display: "flex", alignItems: "stretch", borderRight: "2px solid white"}}>
            <DeckPane cardsRemaining={this.state.cardsRemaining} />
          </div>
          <OtherPlayersPane playerData={this.state.playerData} />
        </div>

        <div className="App-bottom-panes">
          <div style={{width: "30%", borderRight: "2px solid black", overflow: "scroll"}}>
            <LogPane events={this.state.eventsLog} />
          </div>
          <PlayerCardsPane cards={this.state.playerCards} onPlayCard={(cardName) => this.playCard(cardName)} />
        </div>
      </div>
    );
  }
}

export default App;
