import React from 'react';
import './Grid.css';

const getIndexForValue = (val) => (val === 0 ? 0 : Math.log2(val));

function getColourForCellValue(val) {
  let index = getIndexForValue(val);

  switch (index) {
    case 0:
      return "#bbb";
    case 1:
      return "#eee";
    case 2:
      return "#e0e0fa";
    case 3:
      return "#a0a0f0";
    case 4:
      return "#6060ff";
    case 5:
      return "#2040ff";
    case 6:
      return "#0090a4";
    case 7:
      return "#00c090";
    case 8:
      return "#00c020";
    case 9:
      return "#00dd00";
    case 10:
      return "#ffbb00";
    case 11:
      return "#ff5000";
    default:
      return "#bbb";
  }
}

function getTextColourForCellValue(val) {
  let index = getIndexForValue(val);

  if (index > 3) return "#eee";
  else return "#444";
}

const Cell = (props) => (
  <div style={{width: props.cellSize, height: props.cellSize, backgroundColor: getColourForCellValue(props.value)}}
       className="Grid-cell">
    <label style={{color: getTextColourForCellValue(props.value)}}
           className="Grid-cell-label">{props.value === 0 ? "" : props.value}</label>
  </div>
);

const Grid = (props) => (
  <div className="Grid">
    {props.cells.map((row) => (
      <div className="Grid-row">
        {row.map((val) => <Cell cellSize={props.cellSize} value={val} />)}
      </div>
    ))}
  </div>
);

export default Grid;
