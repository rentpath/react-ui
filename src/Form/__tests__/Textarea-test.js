import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ThemedTextarea from '../Textarea'
import theme from './mocks/theme'

const Textarea = ThemedTextarea.WrappedComponent

describe('Form/Textarea', () => {
  it('renders a textarea element', () => {
    const wrapper = shallow(<Textarea />)
    expect(wrapper.find('textarea').length).to.equal(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Textarea id="foo" />)
    expect(wrapper.find('textarea').prop('id')).to.equal('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Textarea theme={theme} />)
    expect(wrapper.find('textarea').prop('className')).to.equal('Textarea')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Textarea theme={theme} className="MyTextarea" />)
    const className = wrapper.find('textarea').prop('className')
    expect(className).to.include('Textarea')
    expect(className).to.include('MyTextarea')
  })
})
