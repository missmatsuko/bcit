import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text } = this.props;

    return (
      <button className="Button">
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Click Here',
};

export default Button;
