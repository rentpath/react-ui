import randomId from '../randomId'

describe('utils/randomId', () => {
  it('creates a random string id', () => {
    expect(typeof randomId()).toBe('string')
    expect(randomId()).not.toBe(randomId())
  })

  it('uses a custom prefix', () => {
    expect(randomId('prefix').substr(0, 6)).toBe('prefix')
  })
})
