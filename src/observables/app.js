import { Observable } from 'rx'

import { profile$ } from './login.js'
import { caption$, url$, share$ } from './share.js'
import { api } from '../utils/api.js'

share$
  .withLatestFrom(caption$, url$, profile$, (submit, caption, url, profile) => {
    return { caption, url, profile }
  })
  .subscribe((share) => {
    api.create('share', share)
  })

// combine all observables into a single one
export const store$ = Observable.combineLatest(profile$, (profile) => {
  return {
    profile
  }
})
