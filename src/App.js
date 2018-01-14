import React, { Component } from 'react';
import './App.css';

import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import DifficultyButtons from './components/DiffcultyButtons/DifficultyButtons';

let headFootStyle = {
  height: 50,
  padding: 10,
  margin: '15px 0',
  color: 'grey',
  fontSize: 18,
  textAlign: 'center'
};

class App extends Component {
  constructor(props) {
    super(props);
    let colors = ["#7DBEA5", "#EE9D31", "#F26C1A", "#5A392B"];
    this.state = {
      colors,
      difficulty: 4,
      code: this.genCode(colors.length),
      selColorIdx: null,
      guesses: [this.getNewGuess()],
      winner: null
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(size).fill().map(dummy => Math.floor(Math.random() * size));
  }

  getWinTries() {
    // if winner, return number of guesses, otherwise 0 (no winner)
    return this.state.winner ? this.state.guesses.length : 0;
  }

  scoreGuess() {
    let answer = this.state.code.slice();
    let score = Object.assign({}, this.state.guesses.last().score);
    let guessCode = this.state.guesses.last().code.slice();
    guessCode.forEach((code, idx) => {
      if (code === answer[idx]) {
        score.perfect += 1;
        answer[idx] = null;
        guessCode[idx] = undefined;
      }
    });
    guessCode.forEach((code) => {
      let answerIdx = answer.indexOf(code);
      if (answerIdx >= 0) {
        score.almost += 1;
        answer[answerIdx] = null;
      }
    });
    return score;
  }

  checkForWinner(guessArray) {
    // return score.perfect === 4 ? true : false;
    let lastGuess = guessArray.last();
    return this.state.code.join() === lastGuess.code.join() ? true : false;
  }

  // Event Handlers

  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  handlePegClick = (idx) => {
    let guessesCopy = this.state.guesses.slice();
    guessesCopy.last().code[idx] = this.state.selColorIdx;
    this.setState({ guesses: guessesCopy });
  }

  handleGuessSubmission = (e) => {
    let guessScore = this.scoreGuess();
    let newGuess = this.getNewGuess();
    let guessesCopy = this.state.guesses.slice();
    guessesCopy.last().score = guessScore;
    let winnerStatus = this.checkForWinner(guessesCopy);
    winnerStatus || guessesCopy.push(newGuess);
    this.setState({guesses: guessesCopy, winner: winnerStatus});
  }

  handleNewGame = () => {
    this.setState((prevState) => ({
      code: this.genCode(prevState.colors.length),
      selColorIdx: null,
      guesses:[this.getNewGuess()],
      winner: null
    }))
  }

    

  // 

  render() {
    return (
      <div className="App">
        <header style={headFootStyle}>R E A C T &nbsp;&nbsp; M A S T E R M I N D</header>
        <div className="App-game">
          <GameBoard
            guesses={this.state.guesses}
            colors={this.state.colors}
            winner={this.state.winner}
            handlePegClick={this.handlePegClick} 
            handleGuessSubmission={this.handleGuessSubmission}
          />
          <div className="App-controls">
            <ColorPicker 
              colors={this.state.colors} 
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection} 
            />
            <NewGameButton 
              handleNewGame={this.handleNewGame}
            />
            <DifficultyButtons
              handleDifficultyChange={undefined}
            />
          </div>
        </div>
        <footer style={headFootStyle}>{(this.state.winner ? `You Won in ${this.getWinTries()} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
