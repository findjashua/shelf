import { Subject } from 'rx'

export const funcSubject = () => {
  let subject = (value) => {
    subject.onNext(value)
  }

  for (var key in Subject.prototype) {
    subject[key] = Subject.prototype[key]
  }

  Subject.call(subject)
  return subject
}
