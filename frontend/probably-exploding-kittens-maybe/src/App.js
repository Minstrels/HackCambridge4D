import React, { Component } from 'react';
import './App.css';

import LogPane from './LogPane.js';
import PlayerCardsPane from './PlayerCardsPane.js';
import DeckPane from './DeckPane.js';
import OtherPlayersPane from './OtherPlayersPane.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-top-panes">
          <div style={{width: "30%", display: "flex", alignItems: "stretch", borderRight: "2px solid white"}}>
            <DeckPane cardsRemaining={30} />
          </div>
          <OtherPlayersPane playerData={[{name: "CPU 1", nCards: 3}, {name: "CPU 2", nCards: 5}]} />
        </div>

        <div className="App-bottom-panes">
          <div style={{width: "30%", borderRight: "2px solid black", overflow: "scroll"}}>
            <LogPane events={["CPU 1 just drew a card", "You just drew a card"]} />
          </div>
          <PlayerCardsPane cards={["Sample", "Sample 2"]} />
        </div>
      </div>
    );
  }
}

export default App;
