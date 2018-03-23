import React from 'react'
import { shallow, mount } from 'enzyme'
import { Field, Button } from '@rentpath/react-ui-core'
import ThemedEmailModal from '../EmailModal'
import theme from './mocks/theme'

const EmailModal = ThemedEmailModal.WrappedComponent

describe('EmailModal', () => {
  const props = {
    theme,
  }
  it('does not render the error message when no error is passed', () => {
    const wrapper = shallow(<EmailModal />)
    expect(wrapper.find('[data-tid="error"]').exists()).toBeFalsy()
  })

  it('renders the error message when there is an error passed', () => {
    const wrapper = shallow(<EmailModal error="foo bar baz" />)
    expect(wrapper.find('[data-tid="error"]').text()).toEqual('foo bar baz')
  })

  it('does not use the error className when there is no error', () => {
    const wrapper = shallow(<EmailModal {...props} />)
    expect(wrapper.hasClass('EmailModal-error')).toBeFalsy()
  })

  it('uses the error className when there is an error', () => {
    const wrapper = shallow(<EmailModal {...props} error="foo bar baz" />)
    expect(wrapper.hasClass('EmailModal-error')).toBeTruthy()
  })

  it('puts an email in as the default when provided', () => {
    const wrapper = shallow(<EmailModal {...props} email="foo@bar.com" />)
    expect(wrapper.find(Field).prop('defaultValue')).toEqual('foo@bar.com')
  })

  it('passes an object with email in it when submit is pressed', () => {
    const preventDefault = () => null
    const onSubmit = jest.fn()
    const wrapper = mount(
      <EmailModal {...props} email="foo@bar.com" onSubmit={onSubmit} />
    )
    wrapper.find('form').simulate('submit', { preventDefault })
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({}),
      { email: 'foo@bar.com' }
    )
  })

  it('does not render the header when no header is passed', () => {
    const wrapper = shallow(<EmailModal />)
    expect(wrapper.find('[data-tid="header"]').exists()).toBeFalsy()
  })

  it('renders the header when a header is passed', () => {
    const wrapper = shallow(<EmailModal header="hello there" />)
    expect(wrapper.find('[data-tid="header"]').text()).toEqual('hello there')
  })

  it('does not render the footer when no footer is passed', () => {
    const wrapper = shallow(<EmailModal />)
    expect(wrapper.find('[data-tid="footer"]').exists()).toBeFalsy()
  })

  it('renders the footer when a footer is passed', () => {
    const wrapper = shallow(<EmailModal footer="hello there" />)
    expect(wrapper.find('[data-tid="footer"]').text()).toEqual('hello there')
  })

  it('allows an override of the submit button text', () => {
    const wrapper = shallow(<EmailModal submitButtonProps={{ children: 'Re-unsubmit' }} />)
    expect(wrapper.find(Button).prop('children')).toEqual('Re-unsubmit')
  })
})
