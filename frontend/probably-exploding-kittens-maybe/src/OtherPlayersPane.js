import React, { Component } from 'react';
import './OtherPlayersPane.css';

class OtherPlayersPane extends Component {

  render() {
    return (
      <div className="OtherPlayersPane">
        {this.props.playerData.map((p) => (
          <div className="OtherPlayersPane-player">
            <label>{p.name}</label>
            <label>{p.nCards} cards</label>
          </div>
        ))}
      </div>
    );
  }

}

export default OtherPlayersPane;
