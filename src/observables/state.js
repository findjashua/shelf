import { Observable } from 'rx'
import { greeting$, name$ } from './app.js'

// combine all observables into a single one
export const state$ = Observable.combineLatest(greeting$, name$, (greeting, name) => {
  return {
    greeting: greeting,
    name: name
  }
})
