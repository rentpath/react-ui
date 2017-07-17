import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Collapsible from '../Collapsible'

function userFunction() {
}

const theme = {}

describe('Collapse', () => {
  it('renders a Collapsible', () => {
    const wrapper = shallow(<Collapsible theme={theme} />)
    expect(wrapper.find('a')).to.have.length(1)
  })

  context('when toggle button clicked', () => {
    it('calls a toggle callback', () => {
      const handleClick = sinon.spy()
      const wrapper = shallow(<Collapsible theme={theme} handleClick={userFunction} />)
      wrapper.find('a').last().simulate('click')
      expect(handleClick.called).to.equal(false)
    })
  })
})
