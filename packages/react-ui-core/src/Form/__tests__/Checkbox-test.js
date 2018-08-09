import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Checkbox />)
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('type')).toEqual('checkbox')
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
