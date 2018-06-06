import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="" />
        <h2>{this.props.username}</h2>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Date of Birth: {this.props.dob}</li>
          <li>Gender: {this.props.gender}</li>
          <li>Nationality: {this.props.nat}</li>
          <li>Location: {this.props.location}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
