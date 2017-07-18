import React from 'react'
import { shallow } from 'enzyme'
import ThemedTextarea from '../Textarea'
import theme from './mocks/theme'

const Textarea = ThemedTextarea.WrappedComponent

describe('Form/Textarea', () => {
  it('renders a textarea element', () => {
    const wrapper = shallow(<Textarea />)
    expect(wrapper.find('textarea').length).toBe(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Textarea id="foo" />)
    expect(wrapper.find('textarea').prop('id')).toBe('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Textarea theme={theme} />)
    expect(wrapper.find('textarea').prop('className')).toBe('Textarea')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Textarea theme={theme} className="MyTextarea" />)
    const className = wrapper.find('textarea').prop('className')
    expect(className).toContain('Textarea')
    expect(className).toContain('MyTextarea')
  })
})
