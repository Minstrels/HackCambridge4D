import React, { Component } from 'react';
import './OtherPlayersPane.css';

const Card = (props) => (
  <div style={{
    height: "70px",
    width: "40px",
    backgroundColor: "#686c74",
    border: "4px solid #4c5675",
    borderRadius: "8px"
  }} />
);

class OtherPlayersPane extends Component {

  render() {
    return (
      <div className="OtherPlayersPane">
        {this.props.playerData.map((p) => (
          <div className="OtherPlayersPane-player">
            <label>{p.name}</label>
            <label>{p.nCards} cards</label>
            <div style={{display: "flex", flexDirection: "row"}}>
              {[<Card />, <Card />]}
            </div>
          </div>
        ))}
      </div>
    );
  }

}

export default OtherPlayersPane;
