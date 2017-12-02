import React from 'react';

const ScoreButton = (props) => {
  return (
    <button 
      onClick={props.handleGuessSubmission} className="btn btn-default" disabled={props.code.includes(null)} style={{padding: '2px 6px'}}>
      ✔
    </button>
  );
}

export default ScoreButton;