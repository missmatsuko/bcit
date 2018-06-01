import React, { Component } from 'react';
import './index.css';
import Clock from '../Clock';
import Button from '../Button';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: Date.now(),
      duration: 0,
      paused: false,
    }

    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.togglePaused = this.togglePaused.bind(this);
  }

  startClock() {
    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = now - this.state.start;

      this.setState({
        duration: diff,
      });
    }, 1000);

    this.setState({
      paused: false,
    });
  }

  stopClock() {
    clearInterval(this.interval);

    this.setState(prevState => ({
      duration: 0,
      paused: true,
    }));
  }

  togglePaused() {
    this.setState(prevState => ({
      paused: !prevState.paused,
    }));
  }

  componentDidMount() {
    this.startClock();
  }

  render() {
    return (
      <div className="StopWatch">
        <div className="StopWatch__inner">
          <Clock duration={ this.state.duration } />

          <div className="StopWatch__controls">
            <Button
              text={ this.state.paused ? 'Resume' : 'Pause' }
              color={ this.state.paused ? 'green' : 'red' }
              onClick={ this.togglePaused }
            />
            <Button
              text="Reset"
              onClick={ this.stopClock }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
