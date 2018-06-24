import React, {Component} from 'react';
import './index.css';

class ForecastTable extends Component {
  render() {
    const {data} = this.props;

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
                    <img src={`http://l.yimg.com/a/i/us/we/52/${item.code}.gif`} alt='' />
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
};

export default ForecastTable;
