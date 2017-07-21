import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../Modal'

describe('Modal/Modal', () => {
  describe('Overlay', () => {
    const OverlayTheme = { overlay: 'overlay' }
    const theme = { Overlay: OverlayTheme }
    const wrapper = shallow(
      <Modal
        theme={theme}
        onClose={() => { }}
      />,
    )

    it('adds `styles` prop from theme to the root node', () => {
      expect(wrapper.prop('styles')).toBe(OverlayTheme)
    })

    describe('onClick', () => {
      it('provides Overlay with a prop when `closeOnOverlayClick` and `onClose` is true', () => {
        expect(wrapper.find('Overlay').prop('onClick')).toBeInstanceOf(Function)
      })

      it('does not provide Overlay with prop when `onClose` is true and `closeOnOverlayClick` is false', () => {
        wrapper.setProps({ closeOnOverlayClick: false })
        expect(wrapper.find('Overlay').prop('onClick')).not.toBeInstanceOf(Function)
      })
    })
  })
})
