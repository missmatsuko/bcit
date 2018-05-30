import React, { Component } from 'react';

// Components
import Action from './Action';

class ActionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ActionList">
        <Action name="rock" />
        <Action name="paper" />
        <Action name="scissors" />
      </div>
    );
  }
}

export default ActionList;
