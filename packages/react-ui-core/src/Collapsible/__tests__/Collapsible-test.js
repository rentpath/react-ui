import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Collapsible from '../Collapsible'

function userFunction(componentInfo) {
  const display = !componentInfo.state.display
  componentInfo.setState({
    display,
    toggleItems: display ? 'Show Less' : (componentInfo.props.toggleItems || 'See all items'),
  })
}

const theme = {}

describe('Collapse', () => {
  it('renders a Collapsible', () => {
    const wrapper = shallow(<Collapsible theme={theme} />)
    expect(wrapper.find('a')).to.have.length(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Collapsible id="foo" theme={theme} />)
    expect(wrapper.find('div[id="foo"]').prop('id')).to.equal('foo')
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<Collapsible id="foo" collapsible="collapsible" theme={theme} />)
    expect(wrapper.find('.collapsible')).to.have.length(1)
  })

  context('when toggle button clicked', () => {
    it('calls a toggle callback', () => {
      const handleClick = sinon.spy()
      const wrapper = shallow(<Collapsible id='foo' theme={theme} handleClick={userFunction} />)
      wrapper.find('a').simulate('click')
      expect(handleClick.calledOnce).to.be.true
    })
  })
})
