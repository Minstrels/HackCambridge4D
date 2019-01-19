import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="Card" onClick={() => props.onPlayCard(props.name)}>
    <label>{props.name}</label>
  </div>
);

export default Card;
