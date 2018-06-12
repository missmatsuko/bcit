import React, { Component } from 'react';
import './App.css';

// Components
import CheckList from './components/CheckList';

const tasks = ['Check this item to remove it from your todo list', 'Item 2', 'Item 3'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="AppTitle">Todo List</h1>
        <CheckList items={ tasks } />

        <form className="AppForm">
          <input type="text" className="AppFormInput" />
          <input type="submit" value="Add" className="AppFormSubmit" />
        </form>
      </div>
    );
  }
}

export default App;
