import { expect } from 'chai'
import keyMirror from '../keyMirror'

describe('utils/keyMirror', () => {
  it('converts an array into an object with mirrored key/values', () => {
    expect(keyMirror(['one', 'two'])).to.eql({
      one: 'one',
      two: 'two',
    })
  })
})
