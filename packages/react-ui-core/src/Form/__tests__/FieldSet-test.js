import React from 'react'
import { shallow } from 'enzyme'
import ThemedFieldSet from '../FieldSet'
import theme from './mocks/theme'

const FieldSet = ThemedFieldSet.WrappedComponent

describe('Form/FieldSet', () => {
  it('renders a fieldset element', () => {
    const wrapper = shallow(<FieldSet />)
    expect(wrapper.find('fieldset').length).toBe(1)
  })

  it('renders a legend element', () => {
    const wrapper = shallow(<FieldSet legend="foo" />)
    expect(wrapper.find('legend').text()).toBe('foo')
  })

  it('passes through props', () => {
    const wrapper = shallow(<FieldSet id="foo" />)
    expect(wrapper.find('fieldset').prop('id')).toBe('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<FieldSet theme={theme} />)
    expect(wrapper.find('fieldset').prop('className')).toBe('FieldSet')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<FieldSet theme={theme} className="MyFieldSet" />)
    const className = wrapper.find('fieldset').prop('className')
    expect(className).toContain('FieldSet')
    expect(className).toContain('MyFieldSet')
  })
})
