import React from 'react';
import GuessPegs from './../GuessPegs/GuessPegs';
import ScoreButton from './../ScoreButton/ScoreButton';
import GuessScore from './../GuessScore/GuessScore';
import './GuessRow.css';

const GuessRow = (props) => {
  return (
    <div className="GuessRow">
      <div 
        style={{color: props.currentGuess ? 'black' : 'lightgrey'}}
        className="GuessRow-num"
      >
        {props.rowIdx + 1}
      </div>
      <GuessPegs 
        code={props.guess.code}
        colors={props.colors}
        currentGuess={props.currentGuess}
        handlePegClick={props.handlePegClick}
      />
      {
        props.currentGuess && !props.winner ? 
          <ScoreButton handleGuessSubmission={props.handleGuessSubmission} code={props.guess.code}/> : 
          <GuessScore score={props.guess.score} />
      }
    </div>
  );
}

export default GuessRow;