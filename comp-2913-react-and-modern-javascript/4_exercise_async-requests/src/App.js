import React, { Component } from 'react';
import './App.css';

const ENDPOINT = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    }

    // Bind custom methods
    // this.pause = this.pause.bind(this);
  }


  // Lifecycle methods
  componentDidMount() {
    const self = this;

    fetch(ENDPOINT)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      self.setState({
        results: json,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 class="AppTitle">Countries List</h1>
        {
          this.state.results.length
          ?
          <ul class="AppList">
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
          :
          <div className="AppSpinner">
            <span class="screen-reader-text">Loading...</span>
          </div>
        }
      </div>
    );
  }
}

export default App;