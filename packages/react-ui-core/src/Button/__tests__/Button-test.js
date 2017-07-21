import React from 'react'
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
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Button id="foo" />)
    expect(wrapper.find('button').prop('id')).toBe('foo')
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<Button className="button" />)
    expect(wrapper.find('button').prop('className')).toBe('button')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Button theme={theme} />)
    expect(wrapper.find('button').prop('className')).toContain('Button')
  })

  it('applies a theme color className', () => {
    const wrapper = shallow(<Button theme={theme} color="primary" />)
    expect(wrapper.find('button').prop('className')).toContain('Button-primary')
  })

  it('applies a theme size className', () => {
    const wrapper = shallow(<Button theme={theme} size="small" />)
    expect(wrapper.find('button').prop('className')).toContain('Button-small')
  })
})
