import React from 'react'
import { mount } from 'enzyme'
import DateInput from '../DateInput'

describe('DateInput', () => {
  it('renders a DateInput', () => {
    const wrapper = mount(<DateInput />)
    expect(wrapper.find('Datepicker')).toHaveLength(1)
  })

  it('passes through id', () => {
    const wrapper = mount(<DateInput datepickerId="foo" />)
    expect(wrapper.find('Datepicker input').prop('id')).toBe('foo')
  })

  it('applies a custom className', () => {
    const wrapper = mount(<DateInput className="DatePicker" />)
    expect(wrapper.find('Datepicker input').prop('className')).toBe('DatePicker')
  })
})
