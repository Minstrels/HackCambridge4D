import React from 'react';
import './Grid.css';

const Grid = (props) => (
  <div className="Grid">
    {props.cells.map((row) => (
      <div className="Grid-row">
        {row.map((val) => <div style={{width: props.cellSize, height: props.cellSize, border: "5px solid black"}} />)}
      </div>
    ))}
  </div>
);

export default Grid;
