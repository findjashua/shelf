import React, { Component } from 'react';
import { event$ } from '../observables/app.js'

export class App extends Component {
  render() {
    return (
      <div>
        <input
          placeholder='greeting'
          value={this.props.greeting}
          onChange={event$.greeting} />
        <input
          placeholder='name'
          value={this.props.name}
          onChange={event$.name} />
        <p>{this.props.greeting} {this.props.name}</p>
      </div>
    );
  }
}
