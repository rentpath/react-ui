import React from 'react'
import { shallow } from 'enzyme'
import Name from '../Name'

describe('Email', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Name />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('name')
    expect(wrapper.prop('placeholder')).toEqual('Name')
  })

  it('assumes props passed', () => {
    wrapper.setProps({
      name: 'nameFoo',
      placeholder: 'Foo placeholder',
    })

    expect(wrapper.prop('name')).toEqual('nameFoo')
    expect(wrapper.prop('placeholder')).toEqual('Foo placeholder')
  })

  it('passes extra props', () => {
    wrapper.setProps({
      label: 'some label',
    })

    expect(wrapper.prop('label')).toEqual('some label')
  })
})
