import React, { Component } from 'react';
import './index.css';

class Task extends Component {
  render() {
    const { value } = this.props;

    return (
      <li key={ value } className="Task">
        <label className="TaskLabel">
          <input type="checkbox" className="TaskInput" value={ value } />
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
