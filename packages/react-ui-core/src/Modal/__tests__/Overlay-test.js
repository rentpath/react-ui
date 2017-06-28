import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Overlay from '../Overlay'

describe('Modal/Overlay', () => {
  describe('className', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Overlay />)
    })

    it('does not have a `className` on the root node', () => {
      expect(wrapper.prop('className')).to.equal('')
    })

    it('applies `overlay` to `className` on the root node', () => {
      wrapper.setProps({ styles: { overlay: 'foo' } })
      expect(wrapper.prop('className')).to.equal('foo')
    })

    it('applies `className` on the root node', () => {
      wrapper.setProps({ className: 'someName' })
      expect(wrapper.prop('className')).to.equal('someName')
    })

    it('applies both `className` and `overlay` to `className` on the root node', () => {
      wrapper.setProps({ styles: { overlay: 'foo' }, className: 'bar' })
      const className = wrapper.prop('className')
      expect(className).to.contain('bar').and.contain('foo')
    })
  })

  describe('onClick', () => {
    let wrapper
    let onClick
    let node

    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(
        <Overlay onClick={onClick}>
          <div id='child'></div>
        </Overlay>,
      )

      node = wrapper.first().node
      wrapper.instance().overlay = node
    })

    it('invokes when `onClick` and node clicked is root', () => {
      wrapper.find('div').first().simulate('click', { target: node })
      expect(onClick.called).to.equal(true)
    })

    it('does not invoke when no `onClick` prop', () => {
      wrapper.setProps({ onClick: undefined })
      wrapper.find('div').first().simulate('click', { target: node })
      expect(onClick.called).to.equal(false)
    })

    it('does not invoke when target clicked in not the root node', () => {
      wrapper.find('#child').first().simulate('click', { target: node })
      expect(onClick.called).to.equal(false)
    })
  })
})
