import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  constructor(props) {
    super(props);

    // Bind custom methods
    this.onClick = this.onClick.bind(this);
  }

  // Custom methods
  onClick(event) {
    this.props.onClick(event, this.props);
  }

  render() {
    const { text } = this.props;

    return (
      <button className="Button" onClick={ this.onClick }>
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Click Here',
};

export default Button;
