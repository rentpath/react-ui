import { expect } from 'chai'
import parseArgs from '../parseArgs'

describe('utils/parseArgs', () => {
  const component = () => null
  const props = { className: 'foo' }

  it('returns an array', () => {
    expect(parseArgs()).to.be.an('array')
  })

  context('when value is null', () => {
    it('returns default component and default props', () => {
      const args = parseArgs(null, component, props)
      expect(args).to.eql([component, props])
    })
  })

  context('when value is a function', () => {
    it('returns value and default props', () => {
      const value = () => null
      const args = parseArgs(value, component, props)
      expect(args).to.eql([value, props])
    })
  })

  context('when value is an object', () => {
    it('returns default component and composed props', () => {
      const value = { className: 'bar', id: 'bar' }
      const args = parseArgs(value, component, props)
      expect(args).to.eql([component, { className: 'foo bar', id: 'bar' }])
    })
  })

  context('when value is a string', () => {
    it('returns default component, default props, and value as child', () => {
      const value = 'Hello World!'
      const args = parseArgs(value, component, props)
      expect(args).to.eql([component, props, value])
    })
  })
})
