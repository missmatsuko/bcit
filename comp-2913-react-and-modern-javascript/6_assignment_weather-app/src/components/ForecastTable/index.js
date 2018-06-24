import React, {Component} from 'react';
import './index.css';

class ForecastTable extends Component {
  render() {
    const {data, units} = this.props;

    if(data.length) {
      return(
        <table className="ForecastTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weather</th>
              <th>High</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) =>
                <tr key={item.key}>
                  <td>{item.day} {item.date}</td>
                  <td>
                    <img src={`http://l.yimg.com/a/i/us/we/52/${item.code}.gif`} alt='' />
                    <span>{item.text}</span>
                  </td>
                  <td>{`${item.high}°${units.toUpperCase()}`}</td>
                  <td>{`${item.low}°${units.toUpperCase()}`}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      );
    } else {
      return(
        <p>No Weather Data</p>
      );
    }
  }
}

ForecastTable.defaultProps = {
  data: [],
  units: 'c',
};

export default ForecastTable;
