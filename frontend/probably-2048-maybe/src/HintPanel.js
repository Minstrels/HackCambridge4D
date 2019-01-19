import React from 'react';
import './HintPanel.css';

const HintPanel = (props) => (
  <div className="HintPanel">
    <label className="HintPanel-label">{props.recommendedDirection}</label>
  </div>
);

export default HintPanel;
