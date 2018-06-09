import React, { Component } from 'react';
import './index.css';

import Icon from '../Icon';

class Action extends Component {
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
      <button className="Action color-human" onClick={ this.onClick }>
        <span className="Action__icon">
          <Icon name={ text } />
        </span>
        <span className="Action__text">{ text }</span>
      </button>
    );
  }
}

Action.defaultProps = {
  text: 'Click Here',
};

export default Action;
