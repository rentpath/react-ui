import React from 'react'
import { shallow } from 'enzyme'
import ThemedModal from '../Modal'

const Modal = ThemedModal.WrappedComponent

const theme = {
  Modal: 'Modal-base',
  'Modal-open': 'Modal-open',
  'Modal-close': 'Modal-close',
}

const onClose = jest.fn(() => true)

describe('Modal/Modal', () => {
  let wrapper

  describe('Overlay', () => {
    beforeEach(() => {
      wrapper = shallow(<Modal theme={theme} onClose={onClose} />)
    })

    test('adds `className` prop to the root node', () => {
      const className = 'rootClass'
      wrapper.setProps({ className })
      expect(wrapper.prop('className')).toContain(className)
    })

    test('adds Modal `theme` to the root node', () => {
      expect(wrapper.prop('className')).toContain('Modal-base')
    })

    describe('open / closed state className', () => {
      test('adds `open` theme class to the root node', () => {
        wrapper.setProps({ isOpen: true })
        const className = wrapper.prop('className')
        expect(className).toContain(theme['Modal-open'])
        expect(className).not.toContain(theme['Modal-close'])
      })

      test('adds `close` theme class to the root node', () => {
        wrapper.setProps({ isOpen: false })
        const className = wrapper.prop('className')
        expect(className).toContain(theme['Modal-close'])
        expect(className).not.toContain(theme['Modal-open'])
      })
    })

    describe('onClick', () => {
      test('provides Overlay with a prop when `closeOnOverlayClick` and `onClick` is true', () => {
        wrapper.setProps({ closeOnOverlayClick: true })
        expect(wrapper.prop('onClick')).toEqual(onClose)
      })

      test('does not provide Overlay with prop when `onClose` is true and `closeOnOverlayClick` is false', () => {
        wrapper.setProps({ closeOnOverlayClick: false })
        expect(wrapper.prop('onClick')).not.toEqual(onClose)
      })
    })
  })
})
