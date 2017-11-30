import React from 'react';
import GuessPegs from './../GuessPegs/GuessPegs';
import ScoreButton from './../ScoreButton/ScoreButton';
import GuessScore from './../GuessScore/GuessScore';

const GuessRow = (props) => {
  return (
    <div>
      <div>
        {props.rowIdx + 1}
      </div>
      <GuessPegs 
        code={props.guess.code}
        colors={props.colors}
      />
      {(props.currentGuess ? <ScoreButton /> : <GuessScore score={props.guess.score}/>)}
    </div>
  );
}

export default GuessRow;