import React, { Component } from 'react';

// Components
import Button from './Button';

class ResetButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button text="Reset" />
    );
  }
}

export default ResetButton;
