import keyMirror from '../keyMirror'

describe('utils/keyMirror', () => {
  it('converts an array into an object with mirrored key/values', () => {
    expect(keyMirror(['one', 'two'])).toMatchObject({
      one: 'one',
      two: 'two',
    })
  })
})
