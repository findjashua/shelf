import React, { Component } from 'react'

import { subject } from '../utils/funcSubject'

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

export const caption$ = subject
  .filter(evt => { return evt.data.source === 'share.caption' })
  .map(evt => { return evt.synthEvt.target.value })
  .startWith('')

export const url$ = subject
  .filter(evt => { return evt.data.source === 'share.url' })
  .map(evt => evt.synthEvt.target.value)
  .startWith('')

export const share$ = subject
  .filter(evt => { return evt.data.source === 'share.submit' })
