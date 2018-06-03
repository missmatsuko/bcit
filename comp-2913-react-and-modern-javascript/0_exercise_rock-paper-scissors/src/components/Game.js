import React, { Component } from 'react';

// Components
import Score from './Score';
import Button from './Button';

const ACTIONS = ['rock', 'paper', 'scissors']; // Rock < Paper < Scissors < Rock ...
const WINNING_SCORE = 5;

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      computerScore: 0,
      humanScore: 0,
    }

    // Bind custom methods
    this.end = this.end.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Custom methods
  end() {
    // Display message about who won (when one player reaches 5 pts)
    console.log("end game");
  }

  play(event, buttonProps) {
    // Get action key for player
    const humanAction = ACTIONS.indexOf(buttonProps.text);

    // Make random action key for computer
    const computerAction = Math.floor(Math.random() * ACTIONS.length);

    // Figure out winner, adjust points
    if (humanAction === computerAction) {
      return;
    }

    if (humanAction > computerAction || (humanAction === 0 && computerAction === ACTIONS.length - 1)) {
      this.setState((prevState) => ({
        humanScore: prevState.humanScore + 1,
      }));
    } else {
      this.setState((prevState) => ({
        computerScore: prevState.computerScore + 1,
      }));
    }
  }

  // Lifecycle methods
  componentDidUpdate(prevProps, prevState) {
    // Alert or display message about who won
    if (this.state.humanScore >= WINNING_SCORE || this.state.computerScore >= WINNING_SCORE) {
      this.end();
    }
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

        { ACTIONS.map((actionName) => (
          <Button
            key={ actionName }
            onClick={ this.play }
            text={ actionName }
          />
        )) }

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
