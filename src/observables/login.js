import { Observable } from 'rx'

import { funcSubject } from '../utils/funcSubject.js'
import { hello } from '../utils/hello.js'

export const login$ = funcSubject()

login$
  .subscribe((e) => { hello('facebook').login() })

export const profile$ = Observable
  .fromEvent(hello, 'auth.login')
  .flatMapLatest((auth) => {
    return hello(auth.network).api('/me')
  })
  .startWith(undefined)
