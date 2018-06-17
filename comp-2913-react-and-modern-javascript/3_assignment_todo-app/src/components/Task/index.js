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
          <span className="TaskText">{ value }</span>
        </label>
      </li>
    );
  }
}

Task.defaultProps = {
  value: 'Task',
};

export default Task;
