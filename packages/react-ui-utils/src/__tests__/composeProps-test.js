import { expect } from 'chai'
import composeProps from '../composeProps'

describe('utils/composeProps', () => {
  it('copies values into a target', () => {
    const target = {}
    const values = { foo: 'foo' }
    composeProps(target, values)
    expect(target).to.eql(values)
  })

  it('returnes the composed target object', () => {
    const target = {}
    const values = { foo: 'foo' }
    expect(composeProps(target, values)).to.eql(values)
  })

  it('combines "className" values', () => {
    const target = { className: 'foo' }
    const values = { className: 'bar' }
    expect(composeProps(target, values)).to.eql({ className: 'foo bar' })
  })
})
