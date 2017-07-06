import * as React from 'react'
import { expect } from 'chai'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import ThemedField from '../Field'
import theme from './mocks/theme'

const Field = (ThemedField as any).WrappedComponent

describe('Form/Field', () => {
  const setup = (props?: Object) => {
    const wrapper = mount(
      <Field type="text" {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('renders a div element', () => {
    const { wrapper } = setup()
    expect(wrapper.find('div').length).to.equal(1)
  })

  it('applies a theme classname', () => {
    const { wrapper } = setup({ theme })
    const className = wrapper.find('div').prop('className')
    expect(className).to.include('Field')
  })

  it('renders a text input', () => {
    const { wrapper } = setup()
    expect(wrapper.find('input').length).to.equal(1)
  })

  it('passes theme to the input', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('Input').prop('theme')).to.eql(theme)
  })

  it('passes extra props to the input', () => {
    const { wrapper } = setup({ 'data-id': 'foo' })
    expect(wrapper.find('[data-id="foo"]').length).to.equal(1)
  })

  context('when "id" is undefined', () => {
    it('generates a random input ID', () => {
      const { wrapper } = setup()
      expect(wrapper.find('input').prop('id')).to.not.be.empty
    })
  })

  context('when "disabled" is true', () => {
    it('adds a disabled classname to the container', () => {
      const { wrapper } = setup({ theme, disabled: true })
      const className = wrapper.find('div').prop('className')
      expect(className).to.include('Field-disabled')
    })
  })

  context('when "invalid" is true', () => {
    it('adds a invalid classname to the container', () => {
      const { wrapper } = setup({ theme, invalid: true })
      const className = wrapper.find('div').prop('className')
      expect(className).to.include('Field-invalid')
    })
  })

  context('when "type" is provided', () => {
    it('renders the mapped input component', () => {
      const { wrapper } = setup({ type: 'textarea' })
      expect(wrapper.find('Textarea').length).to.equal(1)
    })
  })

  context('when "container" is an object', () => {
    it('renders a container with merged props', () => {
      const { wrapper } = setup({ container: { id: 'foo' } })
      expect(wrapper.find('div').prop('id')).to.equal('foo')
    })
  })

  context('when "container" is a function', () => {
    it('renders a custom container element', () => {
      const container = sinon.spy(() => null)
      setup({ container })
      expect(Object.keys(container.args[0][0])).to.eql([
        'children',
        'label',
        'input',
        'error',
        'hint',
        'className',
      ])
    })
  })

  context('when "input" is a function', () => {
    it('renders a custom input element', () => {
      const input = sinon.spy(() => <input id="foo" />)
      const { wrapper } = setup({ input })
      expect(wrapper.find('input#foo').length).to.equal(1)
    })
  })

  context('when "label" is a string', () => {
    it('renders a label with custom text', () => {
      const { wrapper } = setup({ label: 'label' })
      expect(wrapper.find('label').text()).to.equal('label')
    })
  })

  context('when "label" is an object', () => {
    it('renders a label with merged props', () => {
      const { wrapper } = setup({ label: { id: 'label' } })
      expect(wrapper.find('label#label').length).to.equal(1)
    })
  })

  context('when "label" is a function', () => {
    it('renders a custom label element', () => {
      const label = sinon.spy(() => <label id="label" />)
      const { wrapper } = setup({ label })
      expect(wrapper.find('label#label').length).to.equal(1)
    })
  })

  context('when rendering a label', () => {
    it('receives a input ID reference', () => {
      const { wrapper } = setup({ id: 'foo', label: 'label' })
      expect(wrapper.find('label').prop('htmlFor')).to.equal('foo')
    })

    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, label: 'label' })
      expect(wrapper.find('label').prop('className')).to.equal('Label')
    })
  })

  context('when "error" is a string', () => {
    it('renders an error with custom text', () => {
      const { wrapper } = setup({ error: 'error' })
      expect(wrapper.find('Text').text()).to.equal('error')
    })
  })

  context('when "error" is an object', () => {
    it('renders an error with merged props', () => {
      const { wrapper } = setup({ error: { id: 'error' } })
      expect(wrapper.find('#error').length).to.equal(1)
    })
  })

  context('when "error" is a function', () => {
    it('renders a custom error element', () => {
      const error = sinon.spy(() => <span id="error" />)
      const { wrapper } = setup({ error })
      expect(wrapper.find('#error').length).to.equal(1)
    })
  })

  context('when rendering an error', () => {
    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, error: 'error' })
      expect(wrapper.find('Text').prop('className')).to.equal('Field_error')
    })
  })

  context('when "hint" is a string', () => {
    it('renders a hint with custom text', () => {
      const { wrapper } = setup({ hint: 'hint' })
      expect(wrapper.find('Text').text()).to.equal('hint')
    })
  })

  context('when "hint" is an object', () => {
    it('renders a hint with merged props', () => {
      const { wrapper } = setup({ hint: { id: 'hint' } })
      expect(wrapper.find('#hint').length).to.equal(1)
    })
  })

  context('when "hint" is a function', () => {
    it('renders a custom hint element', () => {
      const hint = sinon.spy(() => <span id="hint" />)
      const { wrapper } = setup({ hint })
      expect(wrapper.find('#hint').length).to.equal(1)
    })
  })

  context('when rendering a hint', () => {
    it('receives a theme classname', () => {
      const { wrapper } = setup({ theme, hint: 'hint' })
      expect(wrapper.find('Text').prop('className')).to.equal('Field_hint')
    })
  })

  context('when both "error" and "hint" are provided', () => {
    it('only renders the error', () => {
      const { wrapper } = setup({ error: 'error', hint: 'hint' })
      expect(wrapper.find('Text').length).to.equal(1)
      expect(wrapper.find('Text').text()).to.equal('error')
    })
  })

  context('when both "label" and "error" are provided', () => {
    it('renders elements in the correct order', () => {
      const { wrapper } = setup({ label: 'label', error: 'error' })
      expect(wrapper.childAt(0).getDOMNode().nodeName).to.equal('LABEL')
      expect(wrapper.childAt(1).getDOMNode().nodeName).to.equal('INPUT')
      expect(wrapper.childAt(2).getDOMNode().nodeName).to.equal('DIV')
    })
  })

  context('when input is focused', () => {
    it('adds a focused classname to the container', () => {
      const { wrapper } = setup({ theme })
      wrapper.find('input').simulate('focus')
      expect(wrapper.find('div').prop('className')).to.include('Field-focused')
    })

    it('calls a onFocus prop', () => {
      const onFocus = sinon.spy()
      const { wrapper } = setup({ onFocus })
      wrapper.find('input').simulate('focus')
      expect(onFocus).to.have.been.called
    })
  })

  context('when input is blurred', () => {
    it('removes the focused classname from the container', () => {
      const { wrapper } = setup({ theme })
      const container = wrapper.find('div')
      const input = wrapper.find('input')

      input.simulate('focus')
      expect(container.prop('className')).to.include('Field-focused')

      input.simulate('blur')
      expect(container.prop('className')).to.not.include('Field-focused')
    })

    it('calls a onBlur prop', () => {
      const onBlur = sinon.spy()
      const { wrapper } = setup({ onBlur })
      wrapper.find('input').simulate('blur')
      expect(onBlur).to.have.been.called
    })
  })
})
