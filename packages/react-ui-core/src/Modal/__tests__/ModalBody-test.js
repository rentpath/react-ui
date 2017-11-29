import React from 'react'
import { shallow, mount } from 'enzyme'
import ThemedModalBody from '../ModalBody'

const ModalBody = ThemedModalBody.WrappedComponent

describe('Modal/ModalBody', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<ModalBody />)
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).toBe('someName')
    })
  })

  describe('theme', () => {
    const theme = {
      ModalBody: 'foo',
      Modal_InnerBody: 'body',
    }

    const wrapper = shallow(<ModalBody theme={theme} />)

    it('applies `ModalBody` to `className` on the root node', () => {
      const className = wrapper.prop('className')
      expect(className).toContain('foo')
    })

    it('applies `Modal_InnerBody` to the `className` in the child body', () => {
      expect(wrapper.find('div.body').first()).toHaveLength(1)
    })
  })

  describe('CloseButton', () => {
    const component = () => <div>CLOSE</div>
    const onClose = jest.fn()
    const wrapper = mount(
      <ModalBody
        CloseButton={component}
        onClose={onClose}
      />,
    )

    it('renders the prop as a component', () => {
      expect(wrapper.text()).toContain('CLOSE')
    })

    it('sets onClose as a prop on the component', () => {
      expect(wrapper.first().prop('onClose')).toEqual(onClose)
    })

    it('does not render the prop when no prop is passed', () => {
      wrapper.setProps({ CloseButton: undefined })
      expect(wrapper.text()).not.toContain('CLOSE')
    })
  })
})
