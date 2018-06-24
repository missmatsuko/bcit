import React, { Component } from 'react';
import './index.css';

class ForecastTable extends Component {
  render() {
    const { data, daytime } = this.props;

    if(data.length) {
      return(
        <table className="ForecastTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Date</th>
              <th>Day</th>
              <th>High</th>
              <th>Low</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) =>
                <tr key={item.key}>
                  <td>
                    <img src={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${item.code}${daytime ? 'd' : 'n' }.png`} alt='' />
                  </td>
                  <td>{item.date}</td>
                  <td>{item.day}</td>
                  <td>{item.high}</td>
                  <td>{item.low}</td>
                  <td>{item.text}</td>
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
  daytime: true, // Can be used to change weather image to nighttime view (displays moon), but is just a hard-coded value for now.
};

export default ForecastTable;
