import React, { Component } from 'react';
import './App.css';

// Components
import Task from './components/Task';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
      tasks: [
        {
          key: Math.random().toString(),
          value: 'Check this item to remove it from your todo list'
        },
        {
          key: Math.random().toString(),
          value: 'Buy groceries'
        },
        {
          key: Math.random().toString(),
          value: 'Do laundry'
        },
      ],
    };

    // Bind custom methods
    this.handleCheck = this.handleCheck.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Custom methods
  handleCheck= function(event, index) {
    const checked = event.target.checked;
    if (checked) {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
    }
  }

  handleInput = function(event) {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = function(event) {
    if(this.state.newTask.trim()) {
      this.setState((prevState) => ({
        newTask: '',
        tasks: [...prevState.tasks, {key: Math.random().toString(), value: this.state.newTask}],
      }));
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppTitle">Todo List</h1>
        <ul className="AppList">
          {
            this.state.tasks.map(({key, value}, index) =>
              <Task
                value={ value }
                key={ key }
                onChange={(event) => this.handleCheck(event, index)}
              />
            )
          }
        </ul>

        <form className="AppForm" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            className="AppFormInput"
            name="newTask"
            value={ this.state.newTask }
            onChange={ this.handleInput }
          />
          <input
            type="submit"
            value="Add"
            className="AppFormSubmit"
          />
        </form>
      </div>
    );
  }
}

export default App;
