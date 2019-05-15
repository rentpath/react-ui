import React from 'react'
import { shallow, mount } from 'enzyme'
import ThemedModal from '../Modal'
import Overlay from '../Overlay'
import CloseButton from '../ModalCloseButton'

const Modal = ThemedModal.WrappedComponent

const theme = {
  Modal: 'Modal-base',
  'Modal-open': 'Modal-open',
  'Modal-close': 'Modal-close',
}

describe('Modal', () => {
  const setup = props => (
    shallow(
      <Modal
        theme={theme}
        isOpen
        {...props}
      />
    )
  )

  it('calls the onClose prop when the close button is pressed', () => {
    const onClose = jest.fn()
    const wrapper = mount(<Modal theme={theme} onClose={onClose} CloseButton={{}} />)
    wrapper.find(CloseButton).simulate('click')
    expect(onClose).toHaveBeenCalled()
  })

  it('sets isOpen state to false when the modal is closed', () => {
    const wrapper = setup()
    expect(wrapper.state('isOpen')).toBe(true)
    wrapper.find(Overlay).simulate('mouseDown')
    wrapper.find(Overlay).simulate('click')
    expect(wrapper.state('isOpen')).toBe(false)
  })

  it('updates isOpen state when props is updated', () => {
    const wrapper = setup({ isOpen: false })
    expect(wrapper.state('isOpen')).toBe(false)
    wrapper.setProps({ isOpen: true })
    expect(wrapper.state('isOpen')).toBe(true)
  })

  it('adds `className` prop to the first child (modal)', () => {
    const className = 'rootClass'
    const wrapper = setup({ className })
    expect(wrapper.childAt(0).prop('className')).toContain(className)
  })

  it('adds `overlayClassName` prop to the overlay if passed in', () => {
    const overlayClassName = 'overlayClass'
    const wrapper = setup({ overlayClassName })
    expect(wrapper.prop('className')).toContain(overlayClassName)
  })

  it('adds Modal `theme` prop to the first child (modal)', () => {
    const wrapper = setup()
    expect(wrapper.childAt(0).prop('className')).toContain('Modal-base')
  })

  it('extra props get passed to the first child (modal)', () => {
    const wrapper = setup({ 'data-tag_item': 'foo' })
    expect(wrapper.childAt(0).prop('data-tag_item')).toEqual('foo')
  })

  describe('open / closed state className', () => {
    it('adds `open` theme class to the root node', () => {
      const wrapper = setup({})
      const className = wrapper.childAt(0).prop('className')
      expect(className).toContain(theme['Modal-open'])
      expect(className).not.toContain(theme['Modal-close'])
    })

    it('adds `close` theme class to the root node', () => {
      const wrapper = setup({ isOpen: false })
      const className = wrapper.childAt(0).prop('className')
      expect(className).toContain(theme['Modal-close'])
      expect(className).not.toContain(theme['Modal-open'])
    })
  })

  describe('Overlay', () => {
    it('passes `isOpen` to the Overlay', () => {
      const wrapper = setup()
      expect(wrapper.prop('isOpen')).toEqual(true)
      expect(wrapper.name()).toContain('Overlay')
    })

    describe('onClick', () => {
      it('provides Overlay with a prop when `closeOnOverlayClick` and `onClick` is true', () => {
        const wrapper = setup({})
        wrapper.setProps({ closeOnOverlayClick: true })
        expect(wrapper.prop('onClick')).not.toBeUndefined()
      })

      it('does not provide Overlay with prop when `onClose` is true and `closeOnOverlayClick` is false', () => {
        const wrapper = setup({})
        wrapper.setProps({ closeOnOverlayClick: false })
        expect(wrapper.prop('onClick')).toBeUndefined()
      })

      it('calls the onClose prop when the overlay is clicked', () => {
        const onClose = jest.fn()
        const wrapper = setup({ onClose, closeOnOverlayClick: true })
        wrapper.find(Overlay).simulate('mouseDown')
        wrapper.find(Overlay).simulate('click')
        expect(onClose).toHaveBeenCalled()
      })
    })
  })
})
