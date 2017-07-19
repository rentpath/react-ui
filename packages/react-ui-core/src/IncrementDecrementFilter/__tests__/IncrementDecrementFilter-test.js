import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import IncrementDecrementFilter from '../IncrementDecrementFilter'

const theme = {}

describe('IncrementDecrementFilter', () => {
  it('renders a IncrementDecrementFilter', () => {
    const wrapper = shallow(<IncrementDecrementFilter theme={theme} />)
    expect(wrapper.find('span')).to.have.length(3)
  })

  it('passes through props', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} />)
    expect(wrapper.find('div[id="foo"]').prop('id')).to.equal('foo')
  })
  it('passes through props', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} count={3} />)
    expect(wrapper.find('div[id="foo"]').state('count')).to.equal(3)
  })
    
  it('passes through default count state', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} />)
    expect(wrapper.find('div[id="foo"]').state('count')).to.equal(1)
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" collapsible="custom" theme={theme} />)
    expect(wrapper.find('.custom')).to.have.length(1)
  })

  context('when Increment and DecrementFilter button clicked', () => {
    it('calls a increment callback', () => {
      const increment = sinon.spy()
      const wrapper = shallow(<IncrementDecrementFilter id='foo' theme={theme} />)
      wrapper.find('span[class="rightUnit"]').simulate('click')
      expect(increment.calledOnce).to.be.true
    })
    it('calls a decrement callback', () => {
      const handleClick = sinon.spy()
      const wrapper = shallow(<IncrementDecrementFilter id='foo' theme={theme} />)
      wrapper.find('span[class="leftUnit"]').simulate('click')
      expect(decrement.calledOnce).to.be.true
    })
  
  })
})
