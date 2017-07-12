import React from 'react'
import { shallow } from 'enzyme'
import ThemedForm from '../Form'
import theme from './mocks/theme'

const Form = ThemedForm.WrappedComponent

describe('Form/Form', () => {
  const setup = props => {
    const wrapper = shallow(
      <Form {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('renders a form element', () => {
    const { wrapper } = setup()
    expect(wrapper.find('form').length).toBe(1)
  })

  it('passes through props', () => {
    const { wrapper } = setup({ id: 'foo' })
    expect(wrapper.find('#foo').length).toBe(1)
  })

  it('applies a theme classname', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('form').prop('className')).toBe('Form')
  })

  it('composes classNames', () => {
    const { wrapper } = setup({ theme, className: 'MyForm' })
    const className = wrapper.find('form').prop('className')
    expect(className).toContain('Form')
    expect(className).toContain('MyForm')
  })

  describe('when form is submitted', () => {
    const preventDefault = () => null

    it('prevents the default event', () => {
      const spy = jest.fn(preventDefault)
      const onSubmit = jest.fn()
      const { wrapper } = setup({ onSubmit })
      wrapper.find('form').simulate('submit', { preventDefault: spy })
      expect(spy).toBeCalled()
    })

    it('calls a onSubmit callback', () => {
      const onSubmit = jest.fn()
      const { wrapper } = setup({ onSubmit })
      wrapper.find('form').simulate('submit', { preventDefault })
      expect(onSubmit).toBeCalled()
    })

    describe('when "serialize" is true', () => {
      it('serializes form data', () => {
        const onSubmit = jest.fn()
        const { wrapper } = setup({ onSubmit, serialize: true })
        wrapper.find('form').simulate('submit', { preventDefault })
        expect(onSubmit.mock.calls[0][1]).toMatchObject({})
      })
    })

    describe('when "serialize" is not true', () => {
      it('does not serialize form data', () => {
        const onSubmit = jest.fn()
        const { wrapper } = setup({ onSubmit })
        wrapper.find('form').simulate('submit', { preventDefault })
        expect(onSubmit.mock.calls[0][1]).toBe(undefined)
      })
    })
  })
})
