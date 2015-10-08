import React, { Component } from 'react'
import { Observable } from 'rx'

import { Login, profile$ } from './login.js'
import { Welcome } from './welcome.js'
import { Share, caption$, url$, share$ } from './share.js'
import { api } from '../api.js'

export class App extends Component {
  getHeader(profile) {
    return profile ? <Welcome {...profile}/> : <Login/>
  }

  render() {
    var profile = this.props.profile
    return (
      <div>
        { this.getHeader(profile) }
        { profile ? <Share/> : undefined }
      </div>
    )
  }
}

share$
  .withLatestFrom(caption$, url$, profile$, (submit, caption, url, profile) => {
    return { caption, url, profile }
  })
  .subscribe((share) => {
    api.create('share', share)
  })
