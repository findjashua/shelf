import { funcSubject } from '../utils/funcSubject.js'
import { profile$ } from './login.js'

export const subjects = {
  caption$: funcSubject(),
  url$: funcSubject(),
  share$: funcSubject()
}

export const caption$ = subjects.caption$
  .map((e) => e.target.value)
  .startWith('')

export const url$ = subjects.url$
  .map((e) => e.target.value)
  .startWith('')
