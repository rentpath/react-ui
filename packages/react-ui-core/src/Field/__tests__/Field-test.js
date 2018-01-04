import React from 'react'
import { mount } from 'enzyme'
import ThemedField from '../Field'
import theme from './mocks/theme'

const Field = ThemedField.WrappedComponent

describe('Form/Field', () => {
  const setup = props => {
    const wrapper = mount(
      <Field type="text" {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('renders a div element', () => {
    const { wrapper } = setup()
    expect(wrapper.find('div').length).toBe(1)
  })

  it('applies a theme classname', () => {
    const { wrapper } = setup({ theme })
    const className = wrapper.find('div').prop('className')
    expect(className).toContain('Field')
  })

  it('renders a text input', () => {
    const { wrapper } = setup()
    expect(wrapper.find('input').length).toBe(1)
  })

  it('passes theme to the input', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('Input').prop('theme')).toEqual(theme)
  })

  it('passes extra props to the input', () => {
    const { wrapper } = setup({ 'data-id': 'foo' })
    expect(wrapper.find('[data-id="foo"]').length).toBe(4)
  })

  describe('when "id" is undefined', () => {
    it('generates a random input ID', () => {
      const { wrapper } = setup()
      expect(wrapper.find('input').prop('id')).not.toHaveLength(0)
    })
  })

  describe('when "disabled" is true', () => {
    it('adds a disabled classname to the container', () => {
      const { wrapper } = setup({ theme, disabled: true })
      const className = wrapper.find('div').prop('className')
      expect(className).toContain('Field-disabled')
    })
  })

  describe('when "invalid" is true', () => {
    it('adds a invalid classname to the container', () => {
      const { wrapper } = setup({ theme, invalid: true })
      const className = wrapper.find('div').prop('className')
      expect(className).toContain('Field-invalid')
    })
  })

  describe('when "type" is provided', () => {
    it('renders the mapped input component', () => {
      const { wrapper } = setup({ type: 'textarea' })
      expect(wrapper.find('Textarea').length).toBe(1)
    })
  })

  describe('when "container" is an object', () => {
    it('renders a container with merged props', () => {
      const { wrapper } = setup({ container: { id: 'foo' } })
      expect(wrapper.find('div').prop('id')).toBe('foo')
    })
  })

  describe('when "container" is a function', () => {
    it('renders a custom container element', () => {
      const container = jest.fn(() => null)
      setup({ container })
      expect(Object.keys(container.mock.calls[0][0])).toEqual([
        'children',
        'label',
        'input',
        'error',
        'hint',
        'className',
      ])
    })
  })

  describe('when "input" is a function', () => {
    it('renders a custom input element', () => {
      const input = jest.fn(() => <input id="foo" />)
      const { wrapper } = setup({ input })
      expect(wrapper.find('input#foo').length).toBe(1)
    })
  })

  describe('when "label" is a string', () => {
    it('renders a label with custom text', () => {
      const { wrapper } = setup({ label: 'label' })
      expect(wrapper.find('label').text()).toBe('label')
    })
  })

  describe('when "label" is an object', () => {
    it('renders a label with merged props', () => {
      const { wrapper } = setup({ label: { id: 'label' } })
      expect(wrapper.find('label#label').length).toBe(1)
    })
  })

  describe('when "label" is a function', () => {
    it('renders a custom label element', () => {
      /* eslint-disable jsx-a11y/label-has-for */
      const label = jest.fn(() => <label id="label" />)
      const { wrapper } = setup({ label })
      expect(wrapper.find('label#label').length).toBe(1)
    })
  })

  describe('when rendering a label', () => {
    it('receives a input ID reference', () => {
      const { wrapper } = setup({ id: 'foo', label: 'label' })
      expect(wrapper.find('label').prop('htmlFor')).toBe('foo')
    })

    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, label: 'label' })
      expect(wrapper.find('label').prop('className')).toBe('Label')
    })
  })

  describe('when there is no "label"', () => {
    it('does not render a label', () => {
      const { wrapper } = setup({ theme })
      expect(wrapper.find('label').exists()).toBeFalsy()
    })
  })

  describe('when "error" is a string', () => {
    it('renders an error with custom text', () => {
      const { wrapper } = setup({ error: 'error' })
      expect(wrapper.find('Text').text()).toBe('error')
    })
  })

  describe('when "error" is an object', () => {
    it('renders an error with merged props', () => {
      const { wrapper } = setup({ error: { id: 'error' } })
      expect(wrapper.find('#error').length).toBe(3)
    })
  })

  describe('when "error" is a function', () => {
    it('renders a custom error element', () => {
      const error = jest.fn(() => <span id="error" />)
      const { wrapper } = setup({ error })
      expect(wrapper.find('#error').length).toBe(1)
    })
  })

  describe('when rendering an error', () => {
    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, error: 'error' })
      expect(wrapper.find('Text').prop('className')).toBe('Field_error')
    })
  })

  describe('when "hint" is a string', () => {
    it('renders a hint with custom text', () => {
      const { wrapper } = setup({ hint: 'hint' })
      expect(wrapper.find('Text').text()).toBe('hint')
    })
  })

  describe('when "hint" is an object', () => {
    it('renders a hint with merged props', () => {
      const { wrapper } = setup({ hint: { id: 'hint' } })
      expect(wrapper.find('#hint').length).toBe(3)
    })
  })

  describe('when "hint" is a function', () => {
    it('renders a custom hint element', () => {
      const hint = jest.fn(() => <span id="hint" />)
      const { wrapper } = setup({ hint })
      expect(wrapper.find('#hint').length).toBe(1)
    })
  })

  describe('when rendering a hint', () => {
    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, hint: 'hint' })
      expect(wrapper.find('Text').prop('className')).toBe('Field_hint')
    })
  })

  describe('when both "error" and "hint" are provided', () => {
    it('only renders the error', () => {
      const { wrapper } = setup({ error: 'error', hint: 'hint' })
      expect(wrapper.find('Text').length).toBe(1)
      expect(wrapper.find('Text').text()).toBe('error')
    })
  })

  describe('when both "label" and "error" are provided', () => {
    it('renders elements in the correct order', () => {
      const { wrapper } = setup({ label: 'label', error: 'error' })
      const children = wrapper.childAt(0)

      expect(children.childAt(0).getDOMNode().nodeName).toBe('LABEL')
      expect(children.childAt(1).getDOMNode().nodeName).toBe('INPUT')
      expect(children.childAt(2).getDOMNode().nodeName).toBe('DIV')
    })
  })

  describe('when input is focused', () => {
    it('adds a focused classname to the container', () => {
      const { wrapper } = setup({ theme })
      wrapper.find('input').simulate('focus')
      expect(wrapper.find('div').prop('className')).toContain('Field-focused')
    })

    it('calls a onFocus prop', () => {
      const onFocus = jest.fn()
      const { wrapper } = setup({ onFocus })
      wrapper.find('input').simulate('focus')
      expect(onFocus).toBeCalled()
    })
  })

  describe('when input is blurred', () => {
    it('removes the focused classname from the container', () => {
      const { wrapper } = setup({ theme })
      const input = wrapper.find('input')

      input.simulate('focus')
      expect(wrapper.find('div').prop('className')).toContain('Field-focused')

      input.simulate('blur')
      expect(wrapper.find('div').prop('className')).not.toContain('Field-focused')
    })

    it('calls a onBlur prop', () => {
      const onBlur = jest.fn()
      const { wrapper } = setup({ onBlur })
      wrapper.find('input').simulate('blur')
      expect(onBlur).toBeCalled()
    })
  })
})
