import React from 'react';
import './DifficultyButtons.css';

const DifficultyButtons = (props) => {
  return (
    <div className="DifficultyButtons-container">
      <button className="btn btn-default" style={{margin: 10}} onClick={() => {}}>
        Beginner
      </button>
      <button className="btn btn-default" style={{margin: 10}} onClick={() => {}}>
        Intermediate
      </button>
      <button className="btn btn-default" style={{margin: 10}} onClick={() => {}}>
        Expert
      </button>
    </div>
  );
}

export default DifficultyButtons;