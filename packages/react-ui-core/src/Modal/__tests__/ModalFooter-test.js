import React from 'react'
import { shallow } from 'enzyme'
import ModalFooter from '../ModalFooter'

describe('Modal/ModalFooter', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<ModalFooter />)
    })

    it('does not have a `className` on the root node', () => {
      expect(wrapper.prop('className')).toBe('')
    })

    it('applies `footer` to `className` on the root node', () => {
      wrapper.setProps({ styles: { footer: 'foo' } })
      expect(wrapper.prop('className')).toEqual('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).toEqual('someName')
    })

    it('applies `footer` to `className` on the root node', () => {
      wrapper.setProps({ styles: { footer: 'foo' } })
      expect(wrapper.prop('className')).toEqual('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'bar' })
      expect(wrapper.prop('className')).toBe('bar')
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
      expect(wrapper.prop('className')).toEqual('footer')
    })
  })
})
