import React, { Component } from 'react';
import './App.css';

class LoginView extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Login</button>
    );
  }
}

export default LoginView;
