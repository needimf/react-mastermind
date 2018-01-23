import React from 'react';
import {Link} from 'react-router-dom';
import './TopScoresPage.css';

const TopScoresPage = (props) => {
  let topScores = props.topScores.map((score, idx) => (
    <tr key={idx}>
      <td>{score.initials}</td>
      <td>{score.numGuesses}</td>
      <td>{score.seconds}</td>
    </tr>
  ))

  return (
    <div>
      <h1 className="header-footer-style">Top Scores</h1>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Initials</th>
            <th>Number of Guesses</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>
          {topScores}
        </tbody>
      </table>
      <div>
        <Link className="btn btn-default" to="/" onClick={() => props.handleNewGame()}>New Game</Link>
      </div>
    </div>
  )
}

export default TopScoresPage;