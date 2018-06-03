import React, { Component } from 'react';
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formattedTime: '00:00',
    }

    // Bind custom methods
    this.formatTime = this.formatTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // Custom methods
  startTimer() {
    clearInterval(this.interval); // Prevent intervals from stacking up (just in case).

    this.interval = setInterval(() => {
      const duration = this.props.lastDuration + Date.now() - this.props.startDate;
      this.setState({
        formattedTime: this.formatTime(duration),
      });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);

    this.setState({
      formattedTime: this.formatTime(this.props.lastDuration),
    });
  }

  formatTime(milliseconds) {
    const MILLISECONDS_PER_SECOND = 1000;
    const SECONDS_PER_MINUTE = 60;
    const MINUTES_PER_HOUR = 60;

    let seconds = milliseconds / MILLISECONDS_PER_SECOND;
    let minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
    seconds = Math.floor(seconds % SECONDS_PER_MINUTE);

    if(minutes >= MINUTES_PER_HOUR) {
      return 'Timed Out!';
    }

    return `${ minutes < 10 ? '0' : '' }${ minutes }:${ seconds < 10 ? '0' : '' }${ seconds }`;
  }

  // Lifecycle methods
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.startDate !== null && this.props.startDate === null) {
      this.stopTimer();
    }
    else if (prevProps.startDate === null && this.props.startDate !== null) {
      this.startTimer();
    }
    else if (prevProps.lastDuration !== this.props.lastDuration) {
      this.setState({
        formattedTime: this.formatTime(this.props.lastDuration),
      });
    }
  }

  render() {
    return (
      <div className="Timer">
        { this.state.formattedTime }
      </div>
    );
  }
}

Timer.defaultProps = {
  lastDuration: 0,
  startDate: Date.now(),
};

export default Timer;
