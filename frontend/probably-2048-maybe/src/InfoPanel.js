import React, { Component } from 'react';
import './InfoPanel.css';

class InfoPanel extends Component {

  render() {
    console.log(this.props.gameOver);

    return (
      <div className="InfoPanel">
        <label className="InfoPanel-label">{this.props.score}</label>
        <label className="InfoPanel-label">{this.props.recommendedDirection}</label>
        {this.props.gameOver ? <label style={{color: "#d22"}} className="InfoPanel-label">Game Over!</label> : null}
      </div>
    )
  }

}

export default InfoPanel;
