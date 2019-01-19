import React from 'react';
import './InfoPanel.css';

const InfoPanel = (props) => (
  <div className="InfoPanel">
    <label className="InfoPanel-label">{props.score}</label>
    {props.gameOver ? <label style={{color: "#d22"}} className="InfoPanel-label">Game Over!</label> : null}
  </div>
);

export default InfoPanel;
