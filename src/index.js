import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

Array.prototype.last = function() {
  return this[this.length - 1];
}

ReactDOM.render(
  <Router>
    <Route render={(props) =>
      <App {...props} />
      }
    />
  </Router>, 
  document.getElementById('root')
);
