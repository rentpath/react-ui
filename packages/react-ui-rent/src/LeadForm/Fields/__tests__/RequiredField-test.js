import React from 'react'
import { mount } from 'enzyme'
import RequiredField from '../RequiredField'

describe('RequiredField', () => {
  let wrapper
  const labelText = 'Test Label'

  beforeEach(() => {
    wrapper = mount(<RequiredField placeholder={labelText} />)
  })

  it('renders label by default', () => {
    const label = wrapper.find('label')
    expect(label.length).toBe(1)
    expect(label.text()).toBe(labelText)
  })

  it('hides label on input change', () => {
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })
    const label = wrapper.find('label')
    expect(label.length).toBe(0)
  })

  it('shows label when input is cleared', () => {
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })
    input.simulate('change', { target: { value: '' } })
    const label = wrapper.find('label')
    expect(label.length).toBe(1)
    expect(label.text()).toBe(labelText)
  })
})
