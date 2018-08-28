import React from 'react'
import { shallow } from 'enzyme'
import DateInput from '../DateInput'

describe('DateInput', () => {
  it('only renders `Datepicker` when state.visible', () => {
    const wrapper = shallow(<DateInput />)
    expect(wrapper.find('Datepicker')).toHaveLength(1)
    wrapper.setState({ visible: false })
    expect(wrapper.find('Datepicker')).toHaveLength(0)
  })

  it('sets the visible state to true when component is mounted', () => {
    const wrapper = shallow(<DateInput />)
    wrapper.setState({ visible: false })
    expect(wrapper.state('visible')).toBe(false)
    wrapper.instance().componentDidMount()
    expect(wrapper.state('visible')).toBe(true)
  })

  it('passes through `datePickerName`', () => {
    const wrapper = shallow(<DateInput datePickerName="foo" />)
    expect(wrapper.find('Datepicker').prop('datePickerName')).toBe('foo')
  })

  it('passes through `className` as `datepickerClassName`', () => {
    const wrapper = shallow(<DateInput className="someClass" />)
    expect(wrapper.find('Datepicker').prop('datepickerClassName')).toBe('someClass')
  })

  it('passes through extra props', () => {
    const wrapper = shallow(<DateInput data-tid="foo" />)
    expect(wrapper.find('Datepicker').prop('data-tid')).toBe('foo')
  })
})
