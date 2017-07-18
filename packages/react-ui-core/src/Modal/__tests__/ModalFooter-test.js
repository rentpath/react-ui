import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ModalFooter from '../ModalFooter'

describe('Modal/ModalFooter', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<ModalFooter />)
    })

    it('does not have a `className` on the root node', () => {
      expect(wrapper.prop('className')).to.equal('')
    })

    it('applies `footer` to `className` on the root node', () => {
      wrapper.setProps({ styles: { footer: 'foo' } })
      expect(wrapper.prop('className')).to.equal('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).to.equal('someName')
    })

    it('applies `footer` and `className` to `className` on the root node', () => {
      wrapper.setProps({ styles: { footer: 'foo' }, className: 'bar' })
      const className = wrapper.prop('className')
      expect(className).to.contain('bar').and.contain('foo')
    })
  })

  describe('theme', () => {
    const theme = {
      Modal: {
        footer: 'footer',
      },
    }

    const wrapper = shallow(<ModalFooter theme={theme} />)

    it('contains Modal theme in styles', () => {
      expect(wrapper.prop('className')).to.equal('footer')
    })
  })
})
