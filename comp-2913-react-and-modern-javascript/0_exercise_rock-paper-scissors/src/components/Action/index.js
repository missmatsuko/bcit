import React, { Component } from 'react';

class Action extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log("clicked action:", this.props.name);
  }

  render() {
    return (
      <button className="Action ActionList__Action" onClick={ this.handleClick }>
        <img src="#" alt="" />
        { this.props.name }
      </button>
    );
  }
}

export default Action;
