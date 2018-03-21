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
    let onMouseDown
    let onMouseUp
    let onClick
    let node
    let child

    beforeEach(() => {
      onMouseDown = jest.fn()
      onMouseUp = jest.fn()
      onClick = jest.fn()
      wrapper = shallow(
        <Overlay
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          <div id="child" />
        </Overlay>,
      )

      node = wrapper.first()
      child = wrapper.find('#child')
      wrapper.instance().overlay = node
    })

    it('invokes when overlay is clicked and there is a callback', () => {
      node.simulate('mouseDown', { target: node })
      node.simulate('mouseUp', { target: node })
      node.simulate('click', { target: node })
      expect(onClick).toBeCalled()
      expect(onMouseDown).toBeCalled()
      expect(onMouseUp).toBeCalled()
    })

    it('does not invoke when overlay is clicked but there is no callback', () => {
      wrapper.setProps({
        onClick: undefined,
        onMouseDown: undefined,
        onMouseUp: undefined,
      })
      node.simulate('mouseDown', { target: node })
      node.simulate('mouseUp', { target: node })
      node.simulate('click', { target: node })
      expect(onClick).not.toBeCalled()
      expect(onMouseDown).not.toBeCalled()
      expect(onMouseUp).not.toBeCalled()
    })

    it('does not invoke when child is clicked', () => {
      node.simulate('mouseDown', { target: child })
      node.simulate('mouseUp', { target: child })
      node.simulate('click', { target: child })
      expect(onClick).not.toBeCalled()
      expect(onMouseDown).toBeCalled()
      expect(onMouseUp).toBeCalled()
    })

    it('does not invoke when child clicked then dragged into overlay', () => {
      node.simulate('mouseDown', { target: child })
      node.simulate('mouseUp', { target: node })
      node.simulate('click', { target: node })
      expect(onClick).not.toBeCalled()
      expect(onMouseDown).toBeCalled()
      expect(onMouseUp).toBeCalled()
    })

    it('does not invoke when overlay clicked then dragged into child', () => {
      node.simulate('mouseDown', { target: node })
      node.simulate('mouseUp', { target: child })
      node.simulate('click', { target: child })
      expect(onClick).not.toBeCalled()
      expect(onMouseDown).toBeCalled()
      expect(onMouseUp).toBeCalled()
    })
  })
})
