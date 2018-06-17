import React, { Component } from 'react';
import './index.css';

class Task extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <li className="Task">
        <label className="TaskLabel">
          <input
            type="checkbox"
            className="TaskInput"
            value={ value }
            onChange={ onChange }
          />
          <span className="TaskCheckbox" />
          <span className="screen-reader-text">Delete item: { value }</span>
        </label>
          <span className="TaskText" aria-hidden={ true }>{ value }</span>
      </li>
    );
  }
}

Task.defaultProps = {
  value: 'Task',
};

export default Task;
