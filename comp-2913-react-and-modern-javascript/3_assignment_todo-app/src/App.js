import React, { Component } from 'react';
import './App.css';

// Components
import Task from './components/Task';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['Check this item to remove it from your todo list', 'Item 2', 'Item 3'],
      value: '',
    };

    // Bind custom methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Custom methods
  handleChange = function(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = function(event) {
    if(this.state.value) {
      this.state.tasks.push(this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppTitle">Todo List</h1>
        <ul className="AppList">
          {
            this.state.tasks.map((item, index) =>
              <Task value={ item } key={ item } />
            )
          }
        </ul>

        <form className="AppForm" onSubmit={ this.handleSubmit }>
          <input type="text" className="AppFormInput" value={ this.state.value } onChange={ this.handleChange } />
          <input type="submit" value="Add" className="AppFormSubmit" />
        </form>
      </div>
    );
  }
}

export default App;