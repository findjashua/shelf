import { Observable } from 'rx'

import { subject } from '../utils/subject.js'
import { hello } from '../utils/hello.js'
import { api } from '../utils/api.js'

subject
  .filter(evt => { return evt.data.source === 'login.submit' })
  .subscribe(evt => { hello('facebook').login() })

const user$ = Observable
  .fromEvent(hello, 'auth.login')
  .flatMapLatest(auth => {
    return hello(auth.network).api('/me')
  })

user$.subscribe(user => api.create('user', user))

export const profile$ = user$.startWith(undefined)
