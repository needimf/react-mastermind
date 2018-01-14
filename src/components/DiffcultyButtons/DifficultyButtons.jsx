import React from 'react';
import './DifficultyButtons.css';

const DifficultyButtons = (props) => {
  return (
    <div className="DifficultyButtons-container">
      <button className="btn btn-default" style={{margin: 10}} onClick={() => props.handleDifficultyChange(4)}>
        Beginner
      </button>
      <button className="btn btn-default" style={{margin: 10}} onClick={() => props.handleDifficultyChange(5)}>
        Intermediate
      </button>
      <button className="btn btn-default" style={{margin: 10}} onClick={() => props.handleDifficultyChange(6)}>
        Expert
      </button>
    </div>
  );
}

export default DifficultyButtons;