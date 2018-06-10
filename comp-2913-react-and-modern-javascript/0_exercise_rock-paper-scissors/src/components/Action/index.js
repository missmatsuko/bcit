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
    const { disabled, name } = this.props;

    return (
      <button className={`Action ${ this.props.className }`} onClick={ this.onClick } disabled={ disabled }>
        <span className="Action__icon">
          <Icon name={ name } />
        </span>
        <span className="Action__text">{ name }</span>
      </button>

    );
  }
}

Action.defaultProps = {
  disabled: false,
  name: 'Click Here',
};

export default Action;
