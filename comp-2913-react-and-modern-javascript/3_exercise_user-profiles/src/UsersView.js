import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';

import data from './data';

class UsersView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {
            data.results.map((user, index) =>
              <li key={index}>
                <Profile
                  username={user.login.username}
                  name={`${user.name.title}. ${user.name.first} ${user.name.last}`}
                  dob={user.dob}
                  location={`${user.location.city}, ${user.location.state}`}
                  image={user.picture.medium}
                  nat={user.nat}
                  gender={user.gender}
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default UsersView;
