import { Observable } from 'rx'

import { profile$ } from './components/login' 

// combine all observables into a single one
export const store$ = Observable.combineLatest(profile$, (profile) => {
  return {
    profile
  }
})
