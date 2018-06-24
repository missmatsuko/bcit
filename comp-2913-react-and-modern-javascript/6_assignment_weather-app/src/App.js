import React, {Component} from 'react';
import './App.css';

// Components
import ForecastTable from './components/ForecastTable';
import SelectInput from './components/SelectInput';

// Data
const ENDPOINT = 'https://query.yahooapis.com/v1/public/yql';

const LOCATIONS = [
  {
    name: 'Victoria',
    value: 'victoria, bc',
  },
  {
    name: 'Vancouver',
    value: 'vancouver, bc',
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

const UNITS = [
  {
    name: 'Celsius (°C)',
    value: 'c',
  },
  {
    name: 'Fahrenheit (°F)',
    value: 'f',
  },
];

const NUM_DAYS = [
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
  {
    name: '5',
    value: 5,
  },
  {
    name: '6',
    value: 6,
  },
  {
    name: '7',
    value: 7,
  },
  {
    name: '8',
    value: 8,
  },
  {
    name: '9',
    value: 9,
  },
  {
    name: '10',
    value: 10,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      location: LOCATIONS[0],
      numDays: NUM_DAYS[0],
      units: UNITS[0],
    };

    // Bind custom methods
    this.getForecast = this.getForecast.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Custom methods
  getForecast = function() {
    const {location, numDays, units} = this.state;
    const query = `select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text='${location.value}') and u='${units.value}' limit ${numDays.value}`;

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

  handleInputChange = function(event) {
    const input = event.target;

    this.setState({
      [input.name]: {
        name: input[input.selectedIndex].text,
        value: input.value,
      },
    });
  }

  // Lifecycle methods
  componentDidMount() {
    this.getForecast();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.location !== this.state.location || prevState.numDays !== this.state.numDays || prevState.units !== this.state.units) {
      this.getForecast();
    }
  }

  render() {
    const {forecast, location, numDays, units} = this.state;

    return (
      <div className="App">

        <h1 className="AppTitle">Weather App</h1>

        <h2>{numDays.value}-day Forecast for {location.name}</h2>
        <ForecastTable
          data={forecast}
          units={units.value}
        />

        <h3>Customize Forecast</h3>
        <div className="AppOptions">
          <SelectInput
            label="Location"
            name="location"
            onChange={this.handleInputChange}
            values={LOCATIONS}
          />
          <SelectInput
            label="Temperature Units"
            name="units"
            onChange={this.handleInputChange}
            values={UNITS}
          />
          <SelectInput
            label="Number of Days"
            name="numDays"
            onChange={this.handleInputChange}
            values={NUM_DAYS}
          />
        </div>

      </div>
    );
  }
}

export default App;
