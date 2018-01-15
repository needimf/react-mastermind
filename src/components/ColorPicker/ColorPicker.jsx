import React from 'react';
import './ColorPicker.css';

const ColorPicker = (props) => {
  return (
    <div className="ColorPicker">
      {props.colors.map((color, idx) => {
        if (idx < props.difficulty) {
          return (
            <div
              className="ColorPicker-cell"
              style={{
                backgroundColor: props.selColorIdx === idx ? 'white' : color,
                border: props.selColorIdx === idx ? `14px solid ${color}` : false
              }}
              key={color}
              onClick={() => props.handleColorSelection(idx)}
            />
          )
        } else {
          return (<div id={`color-placeholder-${idx}`} key={color}></div>)
        }
      })}
      </div>
  );
}

export default ColorPicker;