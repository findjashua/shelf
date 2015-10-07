import { Observable } from 'rx'

import { profile$ } from './login.js'
import { subjects, caption$, url$ } from './share.js'
import { db } from '../db.js'

subjects.share$
  .withLatestFrom(caption$, url$, profile$, (share, caption, url, profile) => {
    return { caption, url, profile }
  })
  .subscribe((share) => {
    db.create('share', share)
  })

// combine all observables into a single one
export const store$ = Observable.combineLatest(profile$, (profile) => {
  return {
    profile
  }
})
