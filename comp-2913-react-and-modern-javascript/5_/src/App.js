import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import TestView1 from './TestView1';
import TestView2 from './TestView2';
import Dog from './Dog';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Router Example</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/dog/chihuahua" />
          <Link to="/dog/bulldog" />
          <Link to="/dog/dalmation" />
          <Route path="/testview1" component={TestView1} />
          <Route path="/testview2" component={TestView2} />
          <Route path="/dogs/:breed" component={Dog} />
          <Route />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
