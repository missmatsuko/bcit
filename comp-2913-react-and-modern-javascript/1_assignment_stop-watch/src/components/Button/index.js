import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const color = this.props.color || 'gray';

    return (
      <button className={ `Button Button--${this.props.color}` }>
        { this.props.text }
      </button>
    );
  }
}

export default Button;
