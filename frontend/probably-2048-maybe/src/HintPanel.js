import React from 'react';
import './HintPanel.css';

const HintPanel = (props) => (
  <div className="HintPanel">
    <div className="HintPanel-row">
      <label style={{opacity: props.recommendedDirections[0]}} className="HintPanel-label">↑</label>
    </div>

    <div className="HintPanel-row">
      <label style={{opacity: props.recommendedDirections[3]}} className="HintPanel-label">←</label>
      <label style={{opacity: props.recommendedDirections[1]}} className="HintPanel-label">→</label>
    </div>

    <div className="HintPanel-row">
      <label style={{opacity: props.recommendedDirections[2]}} className="HintPanel-label">↓</label>
    </div>
  </div>
);

export default HintPanel;
