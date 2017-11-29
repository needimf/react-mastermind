import React from 'react';
import GuessRow from './../GuessRow/GuessRow';

const GameBoard = (props) => {
  return (
    <div>
      <GuessRow />
      <GuessRow />
    </div>
  );
}

export default GameBoard;