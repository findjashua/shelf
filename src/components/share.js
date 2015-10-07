import React, { Component } from 'react'

import { subject } from '../utils/subject.js'

export class Share extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='caption'
          onChange={subject.bind(null, {source: 'share.caption'})} />
        <input
          type='text'
          placeholder='url'
          onChange={subject.bind(null, {source: 'share.url'})} />
        <button onClick={subject.bind(null, {source: 'share.submit'})}>Share</button>
      </div>
    )
  }
}
