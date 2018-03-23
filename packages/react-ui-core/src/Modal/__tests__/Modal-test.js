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

describe('Modal/Modal', () => {
  let wrapper
  let onClose

  beforeEach(() => {
    onClose = jest.fn(() => true)
    wrapper = shallow(<Modal theme={theme} onClose={onClose} />)
  })

  it('calls the onClose prop when the close button is pressed', () => {
    const mountedWrapper = mount(<Modal theme={theme} onClose={onClose} CloseButton={{}} />)
    mountedWrapper.find(CloseButton).simulate('click')
    expect(onClose).toHaveBeenCalled()
  })

  it('sets isOpen state to false when the modal is closed', () => {
    wrapper.setProps({ isOpen: true })
    expect(wrapper.state('isOpen')).toBeTruthy()
    wrapper.find(Overlay).simulate('mouseDown')
    wrapper.find(Overlay).simulate('click')
    expect(wrapper.state('isOpen')).toBeFalsy()
  })

  it('updates isOpen state when props is updated', () => {
    expect(wrapper.state('isOpen')).toBeFalsy()
    wrapper.setProps({ isOpen: true })
    expect(wrapper.state('isOpen')).toBeTruthy()
  })

  describe('Overlay', () => {
    it('adds `className` prop to the root node', () => {
      const className = 'rootClass'
      wrapper.setProps({ className })
      expect(wrapper.prop('className')).toContain(className)
    })

    it('adds Modal `theme` to the root node', () => {
      expect(wrapper.prop('className')).toContain('Modal-base')
    })

    describe('open / closed state className', () => {
      it('adds `open` theme class to the root node', () => {
        wrapper.setProps({ isOpen: true })
        const className = wrapper.prop('className')
        expect(className).toContain(theme['Modal-open'])
        expect(className).not.toContain(theme['Modal-close'])
      })

      it('adds `close` theme class to the root node', () => {
        wrapper.setProps({ isOpen: false })
        const className = wrapper.prop('className')
        expect(className).toContain(theme['Modal-close'])
        expect(className).not.toContain(theme['Modal-open'])
      })
    })

    describe('onClick', () => {
      it('provides Overlay with a prop when `closeOnOverlayClick` and `onClick` is true', () => {
        wrapper.setProps({ closeOnOverlayClick: true })
        expect(wrapper.prop('onClick')).not.toBeUndefined()
      })

      it('does not provide Overlay with prop when `onClose` is true and `closeOnOverlayClick` is false', () => {
        wrapper.setProps({ closeOnOverlayClick: false })
        expect(wrapper.prop('onClick')).toBeUndefined()
      })

      it('calls the onClose prop when the overlay is clicked', () => {
        wrapper.setProps({ closeOnOverlayClick: true })
        wrapper.find(Overlay).simulate('mouseDown')
        wrapper.find(Overlay).simulate('click')
        expect(onClose).toHaveBeenCalled()
      })
    })
  })
})
