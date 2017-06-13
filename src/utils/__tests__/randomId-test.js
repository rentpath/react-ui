import { expect } from 'chai'
import randomId from '../randomId'

describe('utils/randomId', () => {
  it('creates a random string id', () => {
    expect(randomId()).to.be.a('string')
    expect(randomId()).to.not.equal(randomId())
  })

  it('uses a custom prefix', () => {
    expect(randomId('prefix').substr(0, 6)).to.equal('prefix')
  })
})
