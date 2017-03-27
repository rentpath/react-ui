import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ModalBody from '../ModalBody'

describe('Modal/ModalBody', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<ModalBody />)
    })

    it('does not have a `className` on the root node', () => {
      expect(wrapper.prop('className')).to.equal('')
    })

    it('applies `container` to `className` on the root node', () => {
      wrapper.setProps({ styles: { container: 'foo' } })
      expect(wrapper.prop('className')).to.equal('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).to.equal('someName')
    })

    it('applies `container` and `className` to `className` on the root node', () => {
      wrapper.setProps({ styles: { container: 'foo' }, className: 'bar' })
      const className = wrapper.prop('className')
      expect(className).to.contain('bar').and.contain('foo')
    })

    it('applies `body` to the `className` in the child body', () => {
      wrapper.setProps({ styles: { body: 'body' } })
      expect(wrapper.find('div.body').first()).to.have.length(1)
    })
  })

  describe('theme', () => {
    const theme = {
      Modal: {
        container: 'container',
        body: 'body',
      },
    }

    const wrapper = shallow(<ModalBody theme={theme} />)

    it('contains Modal theme in styles', () => {
      expect(wrapper.prop('className')).to.equal('container')
      expect(wrapper.find('div.body').first()).to.have.length(1)
    })
  })

  describe('CloseButton', () => {
    const component = () => <div>CLOSE</div>
    const wrapper = mount(
      <ModalBody
        CloseButton={component}
        onClose={() => { }}
      />
    )

    it('renders the prop as a component', () => {
      expect(wrapper.text()).to.include('CLOSE')
    })

    it('sets onClose as a prop on the component', () => {
      expect(wrapper.childAt(0).prop('onClose')).to.be.instanceof(Function)
    })

    it('does not render the prop when no prop is passed', () => {
      wrapper.setProps({ CloseButton: undefined })
      expect(wrapper.text()).to.not.include('CLOSE')
    })
  })
})
