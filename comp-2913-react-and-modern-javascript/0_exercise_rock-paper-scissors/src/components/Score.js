import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
    };
  }

  // temp
  handleClick = () => {
    console.log("clicked action:", this.props.name);
    this.setState({
      currentScore: this.state.currentScore + 1,
    });
  }

  render() {
    return (
      <div className="Score" onClick={ this.handleClick }>
        <p className="Score__name">{ this.props.name }</p>
        <p className="Score__value">{ this.state.currentScore }</p>
      </div>
    );
  }
}

export default Score;
