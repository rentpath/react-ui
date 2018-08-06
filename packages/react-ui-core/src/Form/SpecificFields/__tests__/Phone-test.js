import React from 'react'
import { shallow } from 'enzyme'
import Phone from '../Phone'

describe('Phone', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Phone />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('phone')
    expect(wrapper.prop('type')).toEqual('tel')
    expect(wrapper.prop('placeholder')).toEqual('Phone')
  })

  it('assumes props passed', () => {
    wrapper.setProps({
      name: 'nameFoo',
      type: 'typeFoo',
      placeholder: 'Foo placeholder',
    })

    expect(wrapper.prop('name')).toEqual('nameFoo')
    expect(wrapper.prop('type')).toEqual('typeFoo')
    expect(wrapper.prop('placeholder')).toEqual('Foo placeholder')
  })

  it('passes extra props', () => {
    wrapper.setProps({
      label: 'some label',
    })

    expect(wrapper.prop('label')).toEqual('some label')
  })
})
