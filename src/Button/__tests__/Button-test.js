import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from '../Button'

describe('Button', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Button id="foo" />)
    expect(wrapper.find('#foo')).to.have.length(1)
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<Button className="bar" />)
    expect(wrapper.find('.bar')).to.have.length(1)
  })

  it('applies a `button` className', () => {
    const wrapper = shallow(<Button styles={{ button: 'foo' }} />)
    expect(wrapper.find('.foo')).to.have.length(1)
  })

  it('applies a `color` className', () => {
    const wrapper = shallow(<Button styles={{ primary: 'foo' }} color="primary" />)
    expect(wrapper.find('.foo')).to.have.length(1)
  })

  it('applies a `size` className', () => {
    const wrapper = shallow(<Button styles={{ small: 'bar' }} size="small" />)
    expect(wrapper.find('.bar')).to.have.length(1)
  })
})
