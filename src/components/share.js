import React, { Component } from 'react'

import { subjects } from '../observables/share.js'

export class Share extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='caption'
          onChange={subjects.caption$} />
        <input
          type='text'
          placeholder='url'
          onChange={subjects.url$} />
        <button onClick={subjects.share$}>Share</button>
      </div>
    )
  }
}
