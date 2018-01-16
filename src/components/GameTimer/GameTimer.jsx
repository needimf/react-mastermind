import React, {Component} from 'react';
import './GameTimer.css';

class GameTimer extends Component {
  formatElapsedTime(seconds) {
    function pad(val, places) {
      let s = val.toString();
      return '0'.repeat(places - s.length) + s;
    }
    return `${pad(Math.floor(seconds / 60), 2)}:${pad(seconds % 60, 2)}`;
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    this.timerId = setInterval(
      this.props.handleTick,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <div className="GameTimer">{this.formatElapsedTime(this.props.elapsedTime)}</div>
      </div>
    )
  }
}

export default GameTimer;