import React, { Component } from 'react'
import { login$ } from '../observables/login.js'

export class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={login$}>Login</button>
      </div>
    )
  }
}
