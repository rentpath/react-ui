import * as React from 'react'
import { expect } from 'chai'
import * as sinon from 'sinon'
import { shallow } from 'enzyme'
import ThemedForm from '../Form'
import theme from './mocks/theme'

const Form = (ThemedForm as any).WrappedComponent

describe('Form/Form', () => {
  const setup = (props?: Object) => {
    const wrapper = shallow(
      <Form {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('renders a form element', () => {
    const { wrapper } = setup()
    expect(wrapper.find('form').length).to.equal(1)
  })

  it('passes through props', () => {
    const { wrapper } = setup({ id: 'foo' })
    expect(wrapper.find('#foo').length).to.equal(1)
  })

  it('applies a theme classname', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('form').prop('className')).to.equal('Form')
  })

  it('composes classNames', () => {
    const { wrapper } = setup({ theme, className: 'MyForm' })
    const className = wrapper.find('form').prop('className')
    expect(className).to.include('Form')
    expect(className).to.include('MyForm')
  })

  context('when form is submitted', () => {
    const preventDefault = () => null

    it('prevents the default event', () => {
      const spy = sinon.spy(preventDefault)
      const onSubmit = sinon.spy()
      const { wrapper } = setup({ onSubmit })
      wrapper.find('form').simulate('submit', { preventDefault: spy })
      expect(spy).to.have.been.called
    })

    it('calls a onSubmit callback', () => {
      const onSubmit = sinon.spy()
      const { wrapper } = setup({ onSubmit })
      wrapper.find('form').simulate('submit', { preventDefault })
      expect(onSubmit).to.have.been.called
    })

    context('when "serialize" is true', () => {
      it('serializes form data', () => {
        const onSubmit = sinon.spy()
        const { wrapper } = setup({ onSubmit, serialize: true })
        wrapper.find('form').simulate('submit', { preventDefault })
        expect(onSubmit.args[0][1]).to.eql({})
      })
    })

    context('when "serialize" is not true', () => {
      it('does not serialize form data', () => {
        const onSubmit = sinon.spy()
        const { wrapper } = setup({ onSubmit })
        wrapper.find('form').simulate('submit', { preventDefault })
        expect(onSubmit.args[0][1]).to.equal(undefined)
      })
    })
  })
})
