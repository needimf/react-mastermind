import React from 'react';
import {Link} from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {

  let difficulties = [
    {name: 'Beginner', colorNum: 4},
    {name: 'Intermediate', colorNum: 5},
    {name: 'Expert', colorNum: 6},
  ]

  function handleDifficultyChange(numOfColors) {
    props.handleDifficultyChange(numOfColors);
    props.handleNewGame();
    props.history.push('/');
  }

  let levels = difficulties.map((difficulty, idx) => (
    <div className="SettingsPage-row" key={difficulty.name}>
      <button className={`btn btn-default${difficulty.colorNum === props.difficulty ? ' SettingsPage-selected-difficulty' : ''}`}
        style={{margin: 10}}
        disabled={difficulty.colorNum === props.difficulty}
        onClick={() => handleDifficultyChange(difficulty.colorNum)}
      >
      {difficulty.name}
      </button>
    </div>
  ))

  return (
    <div>
      <h1 className="header-footer-style">Set Difficulty Level</h1>
      <div className="SettingsPage-container">
        {levels}
      </div>
      <Link className="btn btn-default" to="/">Cancel</Link>
    </div>
  )
}

export default SettingsPage;