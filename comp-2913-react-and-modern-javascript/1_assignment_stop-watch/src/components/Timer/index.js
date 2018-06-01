import React, { Component } from 'react';
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Timer">
        00:00
      </div>
    );
  }
}

export default Timer;
