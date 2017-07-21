import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import IncrementDecrementFilter from '../IncrementDecrementFilter'

const theme = {}

describe('IncrementDecrementFilter', () => {
  it('renders a IncrementDecrementFilter', () => {
    const wrapper = shallow(<IncrementDecrementFilter theme={theme} />)
    expect(wrapper.find('span')).to.have.length(3)
  })

  it('passes through props', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} />)
    expect(wrapper.prop('id')).to.equal('foo')
  })
  it('passes through props', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} count={3} />)
    expect(wrapper.state('count')).to.equal(3)
  })

  it('passes through default count state', () => {
    const wrapper = shallow(<IncrementDecrementFilter id="foo" theme={theme} />)
    expect(wrapper.state('count')).to.equal(1)
  })

  context('when Increment and DecrementFilter button clicked', () => {
    it('calls a increment callback', () => {
      const wrapper = shallow(<IncrementDecrementFilter id='foo' theme={theme} />)
      wrapper.find('span').first().simulate('click')
      expect(wrapper.state('count')).to.equal(2)
    })
    it('calls a decrement callback', () => {
      const wrapper = shallow(<IncrementDecrementFilter id='foo' count={3} theme={theme} count={2} />)
      wrapper.find('span').last().simulate('click')
      expect(wrapper.state('count')).to.equal(1)
    })
  })
})
