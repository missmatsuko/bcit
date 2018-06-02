import React, { Component } from 'react';
import './index.css';
import Timer from '../Timer';
import Button from '../Button';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastDuration: 0,
      startDate: Date.now(),
    }

    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
  }

  pause() {
    this.setState((prevState) => ({
      lastDuration: prevState.lastDuration + Date.now() - prevState.startDate,
      startDate: null,
    }));
  }

  reset() {
    this.setState({
      lastDuration: 0,
      startDate: null,
    });
  }

  start() {
    this.setState({
      startDate: Date.now(),
    });
  }

  render() {
    const { lastDuration, startDate } = this.state;

    return (
      <div className="StopWatch">
        <div className="StopWatch__inner">
          <Timer
            lastDuration={ lastDuration }
            startDate={ startDate }
          />
          <div className="StopWatch__controls">
            <Button
              text={ startDate ? 'Pause' : lastDuration ? 'Resume' : 'Start' }
              color={ startDate ? 'red' : 'green' }
              onClick={ startDate ? this.pause : this.start }
            />
            <Button
              text="Reset"
              onClick={ this.reset }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
