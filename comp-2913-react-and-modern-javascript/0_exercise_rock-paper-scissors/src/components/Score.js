import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { name, value } = this.props;

    return (
      <div className="Score">
        <p className="Score__name">{ name }</p>
        <p className="Score__value">{ value }</p>
      </div>
    );
  }
}

Score.defaultProps = {
  name: 'Player',
  value: 0,
};

export default Score;
