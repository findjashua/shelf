import { subject } from '../utils/subject.js'
import { api } from '../utils/api.js'

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
