import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Collapsible from '../Collapsible'

function userFunction() {
}

const theme = {}

describe('Collapse', () => {
  it('renders a Collapsible', () => {
    const wrapper = shallow(<Collapsible theme={theme} />)
    expect(wrapper.find('a')).to.have.length(1)
  })

  context('when toggle element is clicked', () => {
    it('expands or contracts', () => {
      const wrapper = shallow(<Collapsible theme={theme} handleClick={userFunction} />)
      expect(wrapper.text()).to.contain('more')
      wrapper.find('a').last().simulate('click')
      expect(wrapper.text()).to.contain('less')
      wrapper.find('a').last().simulate('click')
      expect(wrapper.text()).to.contain('more')
    })
  })
})
