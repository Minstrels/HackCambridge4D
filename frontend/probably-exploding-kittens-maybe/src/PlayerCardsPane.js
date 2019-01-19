import React, { Component } from 'react';
import './PlayerCardsPane.css';

import Card from './Card.js';

class PlayerCardsPane extends Component {

  render() {
    return (
      <div className="PlayerCardsPane">
        <label className="PlayerCardsPane-title">Your Cards</label>

        <div className="PlayerCardsPane-cards-pane">{this.props.cards.map((c) => <Card name={c} />)}</div>
      </div>
    );
  }

}

export default PlayerCardsPane;
