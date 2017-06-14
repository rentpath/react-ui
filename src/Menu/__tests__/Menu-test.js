import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Menu from '../components/Menu'

describe('Menu', () => {
  const wrapper = shallow(
    <Menu
      text="foo menu"
      onClick={() => { }}
      id="foo"
      className="bar"
    >
      {'menu child'}
    </Menu>,
  )

  it('renders a menu', () => {
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('renders the menu text', () => {
    expect(wrapper.text()).to.contain('foo menu')
  })

  it('passes through props', () => {
    expect(wrapper.find('#foo')).to.have.length(1)
  })

  it('applies a custom className', () => {
    expect(wrapper.find('.bar')).to.have.length(1)
  })

  it('creates a dropdown menu', () => {
    const dropdownWrapper = shallow(
      <Menu isDropdown>
        {'menu child'}
      </Menu>,
    )
    expect(dropdownWrapper.find('ul')).to.have.length(2)
  })

  it('adds a menu icon', () => {
    const icon = <div className="icon" />
    const iconWrapper = shallow(
      <Menu menuIcon={icon}>
        {'menu'}
      </Menu>,
    )
    expect(iconWrapper.props('menuIcon')).to.be.instanceof(Object)
    expect(iconWrapper.find('span')).to.have.length(1)
  })

  it('can be disabled', () => {
    const disabledWrapper = shallow(
      <Menu isEnabled={false}>
        {'menu'}
      </Menu>,
    )
    expect(disabledWrapper.find('ul')).to.have.length(0)
  })
})
