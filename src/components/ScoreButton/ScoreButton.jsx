import React from 'react';

const ScoreButton = (props) => {
  return (
    <button onClick={props.handleGuessSubmission} className="btn btn-default" style={{padding: '2px 6px'}}>
      ✔
    </button>
  );
}

export default ScoreButton;