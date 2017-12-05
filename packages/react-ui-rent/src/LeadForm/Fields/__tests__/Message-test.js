import React from 'react'
import { shallow } from 'enzyme'
import ThemedMessage from '../Message'

const Message = ThemedMessage.WrappedComponent

describe('Message', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Message />, { lifecycleExperimental: true })
  })

  describe('label', () => {
    describe('string', () => {
      it('sets label text', () => {
        wrapper.setProps({ label: 'some label' })

        expect(wrapper.prop('label')).toEqual({
          className: undefined,
          text: 'some label',
        })
      })
    })

    describe('not a string', () => {
      it('sets label text', () => {
        wrapper.setProps({
          label: {
            className: 'customClass',
            text: 'some custom text',
          },
        })

        expect(wrapper.prop('label')).toEqual({
          className: 'customClass',
          text: 'some custom text',
        })
      })
    })
  })

  it('renders proper defaults if none passed', () => {
    expect(wrapper.prop('name')).toEqual('message')
    expect(wrapper.prop('type')).toEqual('textarea')
    expect(wrapper.prop('label')).toEqual({
      className: undefined,
      text: 'Message',
    })
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
