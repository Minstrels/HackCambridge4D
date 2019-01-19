import React, { Component } from 'react';
import './LogPane.css';

class LogPane extends Component {

  render() {
    return <div className="LogPane">{this.props.events.map((e,i) => <label key={i} className="LogPane-label">{e}</label>)}</div>
  }

}

export default LogPane;
