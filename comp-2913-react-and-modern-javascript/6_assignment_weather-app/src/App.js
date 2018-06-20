import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Weather App</h1>

        <h2>3-day Forecast for [Location]</h2>
        <table>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                [image]
                [temp]
              </td>
              <td>
                [image]
                [temp]
              </td>
              <td>
                [image]
                [temp]
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Location</h2>
        <select>
          <option>Victoria</option>
          <option>Vancouver</option>
          <option>Edmonton</option>
          <option>Toronto</option>
          <option>Montréal</option>
        </select>

      </div>
    );
  }
}

export default App;
