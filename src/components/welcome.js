import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <h3>Welcome, {this.props.first_name}!</h3>
    )
  }
}
