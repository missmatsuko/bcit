import React, { Component } from 'react';
import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(milliseconds) {
    const MILLISECONDS_PER_SECOND = 1000;
    const SECONDS_PER_MINUTE = 60;

    let seconds = milliseconds / MILLISECONDS_PER_SECOND;
    let minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
    seconds = Math.floor(seconds % SECONDS_PER_MINUTE);

    if(minutes > 59) {
      return 'Timed Out!';
    }

    return `${ minutes < 10 ? '0' : '' }${ minutes }:${ seconds < 10 ? '0' : '' }${ seconds }`;
  }

  render() {
    const { duration } = this.props;
    const formattedTime = this.formatTime(duration);

    return (
      <div className="Clock">
        { formattedTime }
      </div>
    );
  }
}

Clock.defaultProps = {
  duration: 0,
};

export default Clock;
