import React, { Component } from 'react';
import './index.css';

// Components
import Action from '../Action';
import Score from '../Score';
import Button from '../Button';

const ACTIONS = ['rock', 'paper', 'scissors']; // Rock < Paper < Scissors < Rock ...
const NUM_ACTIONS = ACTIONS.length;
const WINNING_SCORE = 5;

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      computerScore: 0,
      humanScore: 0,
      computerAction: '',
      humanAction: '',
      ended: false,
      message: '',
    }

    // Bind custom methods
    this.end = this.end.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Custom methods
  end() {
    if(this.state.ended) {
      return;
    }

    let winnerMessage = 'Winner is: ';
    let computerScore = this.state.computerScore;
    let humanScore = this.state.humanScore;

    if(computerScore === humanScore) {
      winnerMessage = "It's a tie";
    }
    else if (humanScore > computerScore) {
      winnerMessage += 'human';
    }
    else {
      winnerMessage += 'computer'
    }

    // Display message about who won (when one player reaches 5 pts)
    this.setState({
      message: `Game over! ${ winnerMessage }!`,
      ended: true,
    });
  }

  play(event, actionProps) {
    if(this.state.ended) {
      return;
    }

    let winnerMessage = 'Winner is: ';

    // Get action key for player
    const humanAction = ACTIONS.indexOf(actionProps.name);

    // Make random action key for computer
    const computerAction = Math.floor(Math.random() * ACTIONS.length);

    // Update field actions
    this.setState({
      humanAction: actionProps.name,
      computerAction: ACTIONS[computerAction],
    });

    // Figure out winner, adjust points
    // Resource: https://stackoverflow.com/a/9553712/6387394
    let diff = (NUM_ACTIONS + humanAction - computerAction) % NUM_ACTIONS;

    // Tie, nobody wins
    if (diff === 0) {
      winnerMessage = "It's a tie";
    }
    // Odd, human wins
    else if (diff % 2 === 1 ) {
      winnerMessage += 'human';
      this.setState((prevState) => ({
        humanScore: prevState.humanScore + 1,
      }));
    }
    // Even, computer wins
    else if (diff % 2 === 0) {
      winnerMessage += 'computer';
      this.setState((prevState) => ({
        computerScore: prevState.computerScore + 1,
      }));
    }

    // Show message
    this.setState({
      message: `Human plays ${ ACTIONS[humanAction] }.
      Computer plays ${ ACTIONS[computerAction] }.
      ${ winnerMessage }!`,
    });
  }

  reset() {
    // Reset both scores to 0
    this.setState({
      computerScore: 0,
      humanScore: 0,
      ended: false,
      message: '',
    });
  }

  // Lifecycle methods
  componentDidUpdate(prevProps, prevState) {
    // Alert or display message about who won
    if (this.state.humanScore >= WINNING_SCORE || this.state.computerScore >= WINNING_SCORE) {
      this.end();
    }
  }

  render() {
    return (
      <section className="Game">
        <div className="Game__scores">
          <Score
            name="human"
            value={ this.state.humanScore }
          />
          <Score
            name="computer"
            value={ this.state.computerScore }
          />
        </div>

        <div className="Game__field">
          <div>
            <Action
              className="color-human"
              name={ this.state.humanAction }
            />
            <Action
              className="color-computer"
              name={ this.state.computerAction }
            />
          </div>
          <div>
            { this.state.message }
          </div>
        </div>

        <div>
          <div className="Game__actions">
            { ACTIONS.map((actionName) => (
              <Action
                className="color-human"
                disabled={ this.state.ended }
                key={ actionName }
                name={ actionName }
                onClick={ this.play }
              />
            )) }
          </div>

          <footer className="Game__footer">
            <Button
              text="Reset Game"
              onClick={ this.reset }
            />
          </footer>
        </div>
      </section>
    );
  }
}

export default Game;
