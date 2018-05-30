import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="Button">
        { this.props.text }
      </button>
    );
  }
}

export default Button;
