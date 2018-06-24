import React, {Component} from 'react';
import './App.css';

// Components
import ForecastTable from './components/ForecastTable';

const ENDPOINT = 'https://query.yahooapis.com/v1/public/yql';
const LOCATIONS = [
  {
    name: 'Vancouver',
    value: 'vancouver, bc',
  },
  {
    name: 'Victoria',
    value: 'victoria, bc',
  },
  {
    name: 'Edmonton',
    value: 'edmonton, ab',
  },
  {
    name: 'Toronto',
    value: 'toronto, on',
  },
  {
    name: 'Montréal',
    value: 'montreal, qc',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        name: 'Vancouver',
        value: 'vancouver, bc'
      },
      forecast: [],
    };

    // Bind custom methods
    this.getForecast = this.getForecast.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  // Custom methods
  getForecast = function() {
    const query = `select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.state.location.value}') and u='c' limit 3`;

    fetch(`${ENDPOINT}?format=json&q=${query}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
        .then((jsonResponse) => {
          return jsonResponse.query.results.channel.map(channel => {
            channel.item.forecast.key = Math.random().toString();
            return channel.item.forecast;
          });
        });
      }
      return [];
    })
    .then((forecast) => {
      this.setState({forecast});
    });
  }

  handleLocationChange = function(event) {
    const newLocation = event.target;

    // Update location in state
    this.setState({
      location: {
        name: newLocation[newLocation.selectedIndex].text,
        value: newLocation.value,
      },
    });

    this.getForecast();
  }

  // Lifecycle methods
  componentDidMount() {
    this.getForecast();
  }

  render() {
    const {forecast, location} = this.state;

    return (
      <div className="App">

        <h1>Weather App</h1>

        <h2>3-day Forecast for {location.name}</h2>
        <ForecastTable data={forecast} />

        <h2>Location</h2>
        <select onChange={this.handleLocationChange}>
          {
            LOCATIONS.map((item, index) =>
              <option key={item.value} value={item.value}>{item.name}</option>
            )
          }
        </select>

      </div>
    );
  }
}

export default App;
