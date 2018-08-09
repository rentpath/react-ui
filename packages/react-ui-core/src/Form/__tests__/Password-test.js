import React from 'react'
import { shallow } from 'enzyme'
import Password from '../Password'

describe('Password', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Password />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('password')
    expect(wrapper.prop('type')).toEqual('password')
  })

  it('assumes props passed', () => {
    wrapper.setProps({
      name: 'nameFoo',
      type: 'typeFoo',
    })

    expect(wrapper.prop('name')).toEqual('nameFoo')
    expect(wrapper.prop('type')).toEqual('typeFoo')
  })

  it('passes extra props', () => {
    wrapper.setProps({
      label: 'some label',
    })

    expect(wrapper.prop('label')).toEqual('some label')
  })
})
