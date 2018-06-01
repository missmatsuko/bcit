import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  render() {
    const { color, text, onClick } = this.props;

    return (
      <button className={ `Button Button--${ color }` } onClick={ onClick }>
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  color: 'gray',
  text: 'Click Me',
};

export default Button;
