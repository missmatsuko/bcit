import React, { Component } from 'react';
import './App.css';

// Components
import ActionList from './components/ActionList';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard scores={
          {
            human: 2,
            computer: 8,
          }
        }/>

        <ActionList />

        <div>
          <ResetButton />
        </div>
      </div>
    );
  }
}

export default App;
