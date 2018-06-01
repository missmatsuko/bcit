import React, { Component } from 'react';
import './index.css';
import Timer from '../Timer';
import Button from '../Button';

class StopWatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="StopWatch">
        <div className="StopWatch__inner">
          <Timer />

          <div class="StopWatch__controls">
            <Button text="Pause" color="red" />
            <Button text="Reset" color="green" />
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
