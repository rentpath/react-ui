import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { keyMirror } from '@rentpath/react-ui-utils'
import ThemedButton from '../Button'

const Button = ThemedButton.WrappedComponent

const theme = keyMirror([
  'Button',
  'Button-small',
  'Button-primary',
])

describe('Button', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Button id="foo" />)
    expect(wrapper.find('button').prop('id')).to.equal('foo')
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<Button className="button" />)
    expect(wrapper.find('button').prop('className')).to.equal('button')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Button theme={theme} />)
    expect(wrapper.find('button').prop('className')).to.include('Button')
  })

  it('applies a theme color className', () => {
    const wrapper = shallow(<Button theme={theme} color="primary" />)
    expect(wrapper.find('button').prop('className')).to.include('Button-primary')
  })

  it('applies a theme size className', () => {
    const wrapper = shallow(<Button theme={theme} size="small" />)
    expect(wrapper.find('button').prop('className')).to.include('Button-small')
  })
})
