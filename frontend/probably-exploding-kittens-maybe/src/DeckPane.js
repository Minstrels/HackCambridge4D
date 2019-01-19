import React from 'react';
import './DeckPane.css';

const DeckPane = (props) => (
  <div className="DeckPane">
    <label className="DeckPane-label">{props.cardsRemaining} cards remaining</label>
  </div>
);

export default DeckPane;
