import jsc from 'jsverify'
import randomId from '../randomId'

describe('utils/randomId', () => {
  it('creates a random string id', () => {
    expect(typeof randomId()).toBe('string')
    expect(randomId()).not.toBe(randomId())
  })

  jsc.property('first part of id is a mathematical subset of input', jsc.nestring, str => {
    const prefix = randomId(str).split('-')[0]
    return prefix.length <= str.length
  })

  it('starts the random ID with an alphanumiric/hyphenated/underscored prefix passed to the function', () => {
    const validString = jsc.suchthat(jsc.string, '', str => str.match(/^[a-z0-9-_]*$/))
    const idStartsWithInput = jsc.forall(validString, str => randomId(str).startsWith(str))
    jsc.check(idStartsWithInput)
  })
})
