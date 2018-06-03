import React, { Component } from 'react';

// Components
import Score from './Score';
import Button from './Button';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      computerScore: 5,
      humanScore: 3,
    }

    // Bind custom methods
    this.end = this.end.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Custom methods
  end() {
    // Display message about who won (when one player reaches 5 pts)
  }

  play(e) {
    // Get action for player

    // Make random action for computer

    // Figure out winner

    // Adjust points

    // Alert or display message about who won
  }

  reset() {
    // Reset both scores to 0
    this.setState({
      computerScore: 0,
      humanScore: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <Score
          name="human"
          value={ this.state.humanScore }
        />
        <Score
          name="computer"
          value={ this.state.computerScore }
        />

        <Button
          text="rock"
          onClick={ this.play }
        />
        <Button
          text="paper"
          onClick={ this.play }
        />
        <Button
          text="scissors"
          onClick={ this.play }
        />

        <div>
          <Button
            text="Reset"
            onClick={ this.reset }
          />
        </div>
      </div>
    );
  }
}

export default Game;
