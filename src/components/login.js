import React, { Component } from 'react'
import { subject } from '../utils/subject.js'

export class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={subject.bind(null, {source: 'login.submit'})}>Login</button>
      </div>
    )
  }
}
