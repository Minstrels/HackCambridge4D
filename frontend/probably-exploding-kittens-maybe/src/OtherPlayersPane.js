import React, { Component } from 'react';
import './OtherPlayersPane.css';

const cardWidth = 40;
const cardOffset = 16;

const HiddenCard = (props) => (
  <div style={{
    height: Math.floor(cardWidth * 7/4) + "px",
    width: cardWidth + "px",
    backgroundColor: "#686c74",
    border: "4px solid #4c5675",
    borderRadius: "8px",
    zIndex: props.index,
    position: "absolute",
    left: Math.floor(props.index * cardOffset) + "px"
  }} />
);

class OtherPlayersPane extends Component {

  generateCards(nCards) {
    let cards = [];

    for (let i = 0; i < nCards; ++i) {
      cards.push(<HiddenCard key={i} index={i} />);
    }

    return cards;
  }

  render() {
    return (
      <div className="OtherPlayersPane">
        {this.props.playerData.map((p, i) => {
          let offset = Math.floor((cardWidth + (cardOffset * (p.nCards-1))) / 2);

          return (
            <div key={i} className="OtherPlayersPane-player">
              <label style={{marginBottom: "36px"}}>{p.name}</label>
              <div style={{position: "relative", left: "-" + offset + "px"}}>
                {this.generateCards(p.nCards)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

}

export default OtherPlayersPane;
