import { Observable } from 'rx'

import { funcSubject } from '../utils/funcSubject.js'
import { hello } from '../utils/hello.js'
import { db } from '../db.js'

export const login$ = funcSubject()

login$
  .subscribe((e) => { hello('facebook').login() })

const user$ = Observable
  .fromEvent(hello, 'auth.login')
  .flatMapLatest((auth) => {
    return hello(auth.network).api('/me')
  })

user$.subscribe((user) => db.create('user', user))

export const profile$ = user$.startWith(undefined)
