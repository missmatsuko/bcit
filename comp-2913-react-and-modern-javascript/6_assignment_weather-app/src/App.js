import React, { Component } from 'react';
import './App.css';

// Components

const ENDPOINT = 'https://query.yahooapis.com/v1/public/yql';
const WEATHER_IMAGE = 'https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/28d.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "vancouver, bc",
      forecast: [],
    };

    // Bind custom methods
    this.getForecast = this.getForecast.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  // Custom methods
  getForecast = function() {
    const query = `select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text='${ this.state.location }') and u='c' limit 3`;

    fetch(`${ ENDPOINT }?format=json&q= ${ query }`)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      this.setState({
        forecast: jsonResponse.query.results.channel.map(channel => {
          channel.item.forecast.key = Math.random().toString();
          return channel.item.forecast;
        }),
      });
    });
  }

  handleLocationChange = function(event) {
    const newLocation = event.target.value;

    // Update location in state
    this.setState({
      location: newLocation,
    });

    this.getForecast();
  }

  // Lifecycle methods
  render() {
    const {forecast, location} = this.state;

    return (
      <div className="App">

        <h1>Weather App</h1>

        <h2>3-day Forecast for {location}</h2>
        {
          forecast.map((item, index) =>
            <div key={item.key}>
              {item.code}
              {item.date}
              {item.day}
              {item.high}
              {item.low}
              {item.day}
              {item.text}
            </div>
          )
        }
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
        <select onChange={this.handleLocationChange}>
          <option value="victoria, bc">Victoria</option>
          <option value="vancouver, bc">Vancouver</option>
          <option value="edmonton, ab">Edmonton</option>
          <option value="toronto, on">Toronto</option>
          <option value="montreal, qc">Montréal</option>
        </select>

      </div>
    );
  }
}

export default App;
