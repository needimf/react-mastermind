import React from 'react';
import {Link} from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {

  let difficulties = [
    {name: 'Easy', colorNum: 4},
    {name: 'Moderate', colorNum: 5},
    {name: 'Difficult', colorNum: 6},
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
      <div className="SettingsPage-difficulty-colors">
        {props.colors.slice(0, difficulty.colorNum).map(color =>
          <div
            className="SettingsPage-color"
            style={{backgroundColor: color}}
            key={color}
          />
        )}
      </div>
    </div>
  ))

  return (
    <div className="SettingsPage-container">
      <h1 className="header-footer-style">Set Difficulty Level</h1>
      <div>
        {levels}
      </div>
      <div>
        <Link className="SettingsPage-cancel btn btn-default" to="/">Cancel</Link>
      </div>
    </div>
  )
}

export default SettingsPage;