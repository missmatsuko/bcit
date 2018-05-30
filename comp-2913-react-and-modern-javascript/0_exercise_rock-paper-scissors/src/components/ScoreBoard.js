import React, { Component } from 'react';

// Components
import Score from './Score';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scores = this.props.scores;

    return (
      <div className="ScoreBoard">
        <Score className="ScoreBoard__Score" name="Human" value="1" />
        <Score className="ScoreBoard__Score" name="Computer" value="20" />
      </div>
    );
  }
}

export default ScoreBoard;
