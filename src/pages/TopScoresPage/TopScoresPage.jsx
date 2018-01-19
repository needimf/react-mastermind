import React from 'react';
import './TopScoresPage.css';

const TopScoresPage = (props) => {
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
          <tr>
            <td>Dummy Data</td>
            <td>4</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TopScoresPage;