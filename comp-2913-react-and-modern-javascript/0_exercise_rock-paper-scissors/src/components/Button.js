import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;

    return (
      <button className="Button" onClick={ onClick }>
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Click Here',
};

export default Button;
