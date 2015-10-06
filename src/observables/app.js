import { funcSubject } from '../utils/funcSubject.js'

export const event$ = {
  greeting: funcSubject(),
  name: funcSubject()
}

export const greeting$ = event$.greeting
  .startWith({target: {value: 'hello'}})
  .map((e) => { return e.target.value })
export const name$ = event$.name
  .startWith({target: {value: 'world'}})
  .map((e) => { return e.target.value })
