import React, { Component } from 'react';
import './InfoPanel.css';

class InfoPanel extends Component {

  render() {
    console.log(this.props.gameOver);

    return (
      <div className="InfoPanel">
        <label className="InfoPanel-score-label">{this.props.score}</label>

        {this.props.gameOver ? <label style={{color: "#d22"}} className="InfoPanel-score-label">Game Over!</label> : null}
      </div>
    )
  }

}

export default InfoPanel;
