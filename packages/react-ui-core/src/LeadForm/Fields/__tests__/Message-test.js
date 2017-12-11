import React from 'react'
import { shallow } from 'enzyme'
import ThemedMessage from '../Message'

const Message = ThemedMessage.WrappedComponent

describe('Message', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Message />, { lifecycleExperimental: true })
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('message')
    expect(wrapper.prop('type')).toEqual('textarea')
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
})
