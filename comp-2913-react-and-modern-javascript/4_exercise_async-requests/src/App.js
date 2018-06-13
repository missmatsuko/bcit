import React, { Component } from 'react';
import './App.css';

const ENDPOINT_ALL = 'https://restcountries.eu/rest/v2/all';
const ENDPOINT_NAME = 'https://restcountries.eu/rest/v2/name/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      query: "",
      results: [],
    }

    // Bind custom methods
    this.fetch = this.fetch.bind(this);
    this.search = this.search.bind(this);
  }

  // Custom methods
  fetch(endpoint) {
    const self = this;

    fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .catch(function() {
      console.error("No response");
      return [];
    })
    .then(function(json) {
      self.setState({
        loaded: true,
        results: json,
      });
    });
  }

  search(event) {
    const value = event.target.value;
    this.fetch(`${ ENDPOINT_NAME }${ value }`);
    this.setState({
      query: value,
    });
  }

  // Lifecycle methods
  componentDidMount() {
    this.fetch(ENDPOINT_ALL);
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppTitle">Countries List</h1>
        {
          // Show input if loaded, else show spinner
          this.state.loaded
          ?
          <input className="AppInput" type="text" value={ this.state.query } onChange={ this.search } placeholder="Search" />
          :
          <div className="AppSpinner">
            <span className="screen-reader-text">Loading...</span>
          </div>
        }
        {
          // Show country list if there are results, else show no results message
          this.state.loaded && this.state.results.length > 0
          &&
          <ul className="AppList">
            {
              this.state.results.map((country) =>
                <li key={ country.alpha3Code }>
                  { country.name }
                  <ul>
                    <li>{ country.capital }</li>
                    <li>{ country.region }</li>
                  </ul>
                </li>
              )
            }
          </ul>
        }
        {
          this.state.loaded && !this.state.results.length &&
          <p>No Results</p>
        }
      </div>
    );
  }
}

export default App;
