import React from 'react'
import { shallow } from 'enzyme'
import MoveInDate from '../MoveInDate'

describe('MoveInDate', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MoveInDate />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('date')
    expect(wrapper.prop('type')).toEqual('date')
    expect(wrapper.prop('placeholder')).toEqual('Move in date')
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
