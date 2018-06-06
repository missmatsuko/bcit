import React, { Component } from 'react';
import './App.css';

import LoginView from './LoginView';
import UsersView from './UsersView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = function() {
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <UsersView /> : <LoginView onClick={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
