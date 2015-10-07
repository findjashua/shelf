import { Subject } from 'rx'

const funcSubject = () => {
  let subject = (data, synthEvt) => {
    subject.onNext({ data, synthEvt })
  }

  for (var key in Subject.prototype) {
    subject[key] = Subject.prototype[key]
  }

  Subject.call(subject)
  return subject
}

export const subject = funcSubject()
