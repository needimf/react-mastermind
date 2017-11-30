import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

Array.prototype.last = function() {
  return this[this.length - 1];
}

ReactDOM.render(<App />, document.getElementById('root'));
