import React from 'react';
import {Link} from 'react-router-dom';
import GameBoard from './../../components/GameBoard/GameBoard';
import ColorPicker from './../../components/ColorPicker/ColorPicker';
import NewGameButton from './../../components/NewGameButton/NewGameButton';
import GameTimer from './../../components/GameTimer/GameTimer';

const GamePage = (props) => {

  // if winner, return number of guesses, otherwise 0 (no winner)
  let winTries = props.winner ? props.guesses.length : 0;

  return (
    <div>
      <div className="App-game">
        <GameBoard
          guesses={props.guesses}
          colors={props.colors}
          winner={props.winner}
          handlePegClick={props.handlePegClick} 
          handleGuessSubmission={props.handleGuessSubmission}
        />
        <div className="App-controls">
          <ColorPicker 
            colors={props.colors} 
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
            difficulty={props.difficulty} 
          />
          <GameTimer 
            elapsedTime={props.elapsedTime}
            handleTick={props.handleTick}
          />
          <Link className="btn btn-default" style={{margin: '0 10px'}} to="/settings">Difficulty</Link>
          <NewGameButton 
            handleNewGame={props.handleNewGame}
          />
        </div>
      </div>
      <footer className="header-footer-style">{(props.winner ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
    </div>
  )
}

export default GamePage;