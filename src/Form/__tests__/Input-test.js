import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ThemedInput from '../Input'
import theme from './mocks/theme'

const Input = ThemedInput.WrappedComponent

describe('Form/Input', () => {
  it('renders an input element', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('renders a text input by default', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.prop('type')).to.equal('text')
  })

  it('passes through props', () => {
    const wrapper = shallow(<Input id="foo" />)
    expect(wrapper.prop('id')).to.equal('foo')
  })

  it('applies a custom classname', () => {
    const wrapper = shallow(<Input className="foo" />)
    expect(wrapper.prop('className')).to.equal('foo')
  })

  it('applies a theme classname', () => {
    const wrapper = shallow(<Input theme={theme} />)
    expect(wrapper.prop('className')).to.include('Input')
  })

  it('applies a theme classname based on input type', () => {
    const wrapper = shallow(<Input theme={theme} />)
    expect(wrapper.prop('className')).to.include('Input-text')
  })

  it('applies a `block` theme classname', () => {
    const wrapper = shallow(<Input block theme={theme} />)
    expect(wrapper.prop('className')).to.include('Input-block')
  })

  it('applies a `invalid` theme classname', () => {
    const wrapper = shallow(<Input invalid theme={theme} />)
    expect(wrapper.prop('className')).to.include('Input-invalid')
  })

  it('applies a `variant` theme classname', () => {
    const wrapper = shallow(<Input variant="primary" theme={theme} />)
    expect(wrapper.prop('className')).to.include('Input-primary')
  })
})
