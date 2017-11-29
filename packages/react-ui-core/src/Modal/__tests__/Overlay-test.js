import React from 'react'
import { shallow } from 'enzyme'
import ThemedOverlay from '../Overlay'

const Overlay = ThemedOverlay.WrappedComponent

describe('Modal/Overlay', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Overlay />)
    })

    it('applies `Overlay` to `className` on the root node', () => {
      wrapper.setProps({ theme: { Overlay: 'foo' } })
      expect(wrapper.prop('className')).toEqual('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).toBe('someName')
    })
  })

  describe('onClick', () => {
    let wrapper
    let onClick
    let node

    beforeEach(() => {
      onClick = jest.fn()
      wrapper = shallow(
        <Overlay onClick={onClick}>
          <div id="child" />
        </Overlay>,
      )

      node = wrapper.first()
      wrapper.instance().overlay = node
    })

    it('invokes when `onClick` and node clicked is root', () => {
      wrapper.find('div').first().simulate('click', { target: node })
      expect(onClick).toBeCalled()
    })

    it('does not invoke when no `onClick` prop', () => {
      wrapper.setProps({ onClick: undefined })
      wrapper.find('div').first().simulate('click', { target: node })
      expect(onClick).not.toBeCalled()
    })

    it('does not invoke when target clicked in not the root node', () => {
      wrapper.find('#child').first().simulate('click', { target: node })
      expect(onClick).not.toBeCalled()
    })
  })
})
