import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import GamePage from './../GamePage/GamePage';
import SettingsPage from './../SettingsPage/SettingsPage';
import TopScoresPage from './../TopScoresPage/TopScoresPage';

class App extends Component {
  constructor(props) {
    super(props);
    let colors = ["#7DBEA5", "#EE9D31", "#F26C1A", "#5A392B", "#F1E0B1", "#6DE3F0"];
    this.state = {
      colors,
      difficulty: 4,
      code: this.genCode(4),
      selColorIdx: null,
      guesses: [this.getNewGuess()],
      winner: null,
      elapsedTime: 0,
      finalTime: 0,
      scores: []
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
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * size));
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
    let finalTime = this.state.finalTime;
    let guessScore = this.scoreGuess();
    let newGuess = this.getNewGuess();
    let guessesCopy = this.state.guesses.slice();
    guessesCopy.last().score = guessScore;
    let winnerStatus = this.checkForWinner(guessesCopy);
    if (winnerStatus) {
      finalTime = this.state.elapsedTime;
      if (this.state.scores.length < 20 || (this.state.guesses.length < this.state.scores.last().numGuesses || (this.state.guesses.length === this.state.scores.last().numGuesses && finalTime < this.state.scores.last().seconds))) {
        let newScore = {seconds: finalTime, numGuesses: this.state.guesses.length}
        this.sendNewTopScore(newScore);
      }
    } else {
      guessesCopy.push(newGuess);
    }
    this.setState({guesses: guessesCopy, winner: winnerStatus, finalTime});
  }

  handleNewGame = () => {
    this.setState((prevState) => ({
      code: this.genCode(prevState.difficulty),
      selColorIdx: null,
      guesses:[this.getNewGuess()],
      winner: null,
      elapsedTime: 0,
      finalTime: 0
    }))
  }

  handleDifficultyChange = (difficulty) => {
    this.setState({difficulty})
  }

  handleTick = () => {
    this.setState((prevState) => ({
      elapsedTime: ++prevState.elapsedTime
    }));
  }

  // New top score api post request
  sendNewTopScore = (score) => {
    let initials = prompt('Congrats, you have a high score!\nPlease enter your initials:');
    score.initials = initials;
    fetch('api/topscores', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({score})
    }).then(res => res.json()).then(() => {
      fetch('api/topscores').then(res => res.json()).then(scores => {
        this.setState({scores}, () => {this.props.history.push('/topscores')});
      });
    });
  }

  // Lifecycle Methods
  componentDidMount() {
    fetch('/api/topscores').then(res => res.json()).then(scores => {this.setState({scores})})
  }

  render() {
    return (
      <div className="App">
        <header className="header-footer-style">R E A C T &nbsp;&nbsp; M A S T E R M I N D</header>
        <Switch>
          <Route exact path="/" render={(props) =>
            <GamePage
              guesses={this.state.guesses}
              colors={this.state.colors}
              winner={this.state.winner}
              handlePegClick={this.handlePegClick} 
              handleGuessSubmission={this.handleGuessSubmission}
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
              difficulty={this.state.difficulty}
              handleNewGame={this.handleNewGame}
              handleDifficultyChange={this.handleDifficultyChange}
              elapsedTime={this.state.elapsedTime}
              handleTick={this.handleTick}
              isTiming={!this.state.finalTime}
            />}
          />
          <Route exact path="/settings" render={(props) =>
            <SettingsPage
              handleDifficultyChange={this.handleDifficultyChange}
              colors={this.state.colors}
              handleNewGame={this.handleNewGame}
              {...props}
              difficulty={this.state.difficulty}
            />}
          />
          <Route exact path="/topscores" render={(props) =>
            <TopScoresPage 
              topScores={this.state.scores}
              handleNewGame={this.handleNewGame}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
