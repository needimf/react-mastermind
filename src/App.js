import React, { Component } from 'react';
import './App.css';

import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';

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
    let colors = ["#7DBEA5", "#F1E0B1", "#EE9D31", "#F26C1A", "#5A392B"];
    this.state = {
      colors,
      code: this.genCode(colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()]
    };
  }

  getNewGuess() {
    return {
      // code: [null, null, null, null],
      code: [3, 2, 1, 0], // for testing purposes
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
    let lastGuess = this.state.guesses.length - 1;
    return this.state.code.join() === this.state.guesses[lastGuess].code.join() ? lastGuess + 1 : 0;
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header style={headFootStyle}>React Mastermind</header>
        <div className="App-game">
          <GameBoard
            guesses={this.state.guesses}
            colors={this.state.colors} 
          />
          <div className="App-controls">
            <ColorPicker 
              colors={this.state.colors} 
              selColorIdx={this.state.selColorIdx} 
            />
            <NewGameButton />
          </div>
        </div>
        <footer style={headFootStyle}>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
