import React, { Component } from 'react';
import './index.css';

class CheckList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="CheckList">
        {
          items.map((item, index) =>
            <li key={ index } className="CheckListItem">
              <label className="CheckListItemLabel">
                <input type="checkbox" className="CheckListItemInput" />
                <span className="CheckListItemText">{ item }</span>
              </label>
            </li>
          )
        }
      </ul>
    );
  }
}

CheckList.defaultProps = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export default CheckList;
