import React, { Component } from 'react';

class Dog extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.match.params.breed }</h1>
        <p>This is a dog page.</p>
      </div>
    );
  }
}

export default Dog;
