import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
  <div className="Card">
    <label>{props.name}</label>
  </div>
);

export default Card;
