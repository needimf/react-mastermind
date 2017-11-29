import React from 'react';
import GuessPegs from './../GuessPegs/GuessPegs';
import ScoreButton from './../ScoreButton/ScoreButton';
import GuessScore from './../GuessScore/GuessScore';

const GuessRow = (props) => {
  return (
    <div>
      <p>#</p>
      <GuessPegs />
      <br/>
      <ScoreButton />
      <GuessScore />
    </div>
  );
}

export default GuessRow;