import React, { Component } from 'react'
import { Login } from './login.js'
import { Welcome } from './welcome.js'

export class App extends Component {
  getHeader(profile) {
    return profile ? <Welcome {...profile}/> : <Login/>
  }

  render() {
    var profile = this.props.profile
    return (
      <div>
        { this.getHeader(profile) }
      </div>
    )
  }
}
