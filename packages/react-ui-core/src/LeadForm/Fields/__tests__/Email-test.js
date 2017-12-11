import React from 'react'
import { shallow } from 'enzyme'
import Email from '../Email'

describe('Email', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Email />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('email')
    expect(wrapper.prop('type')).toEqual('email')
    expect(wrapper.prop('placeholder')).toEqual('Email Address')
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
