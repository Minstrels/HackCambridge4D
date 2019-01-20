import React from 'react';
import './HintPanel.css';

const HintPanel = (props) => (
  <div className="HintPanel">
    <div className="HintPanel-arrows">
      <div className="HintPanel-row">
        <label style={{opacity: props.recommendedDirections[0]}} className="HintPanel-label">↑</label>
      </div>

      <div className="HintPanel-row">
        <label style={{opacity: props.recommendedDirections[3], marginRight: "36px"}} className="HintPanel-label">←</label>
        <label style={{opacity: props.recommendedDirections[1], marginLeft:  "36px"}} className="HintPanel-label">→</label>
      </div>

      <div className="HintPanel-row">
        <label style={{opacity: props.recommendedDirections[2]}} className="HintPanel-label">↓</label>
      </div>
    </div>

    <label className="HintPanel-best-move-label">{props.bestMove.charAt(0).toUpperCase() + props.bestMove.slice(1)}</label>
  </div>
);

export default HintPanel;
