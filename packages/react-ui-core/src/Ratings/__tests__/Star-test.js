import React from 'react'
import { shallow } from 'enzyme'
import Star from '../Star'

describe('Star', () => {
  const props = {
    uniqueId: '123',
    fillColor: 'yellow',
  }

  it('has a default strokeWidth of 3', () => {
    const wrapper = shallow(<Star {...props} />)
    expect(wrapper.find('path').prop('strokeWidth')).toEqual('3')
  })

  it('allows strokeWidth to be overridden', () => {
    const wrapper = shallow(<Star {...props} strokeWidth="0" />)
    expect(wrapper.find('path').prop('strokeWidth')).toEqual('0')
  })
})
