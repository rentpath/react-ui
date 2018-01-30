import React from 'react'
import { shallow } from 'enzyme'
import DateInput from '../DateInput'

describe('DateInput', () => {
  it('renders a DateInput', () => {
    const wrapper = shallow(<DateInput />)
    expect(wrapper.find('DatePicker')).toHaveLength(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<DateInput id="foo" />)
    expect(wrapper.find('DatePicker').prop('id')).toBe('foo')
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<DateInput className="DatePicker" />)
    expect(wrapper.find('DatePicker').prop('className')).toBe('DatePicker')
  })
})
