import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MenuItem from '../components/MenuItem'

describe('MenuItem', () => {
  const wrapper = shallow(
    <MenuItem
      className="bar"
      id="foo"
      text="foo"
    />,
  )

  const urlWrapper = shallow(
    <MenuItem text="foo" url="url" />,
  )

  it('renders a menu item', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })

  it('renders the menu text', () => {
    expect(wrapper.text()).to.contain('foo')
  })

  it('passes through props', () => {
    expect(wrapper.find('#foo')).to.have.length(1)
  })

  it('applies a custom className', () => {
    expect(wrapper.find('.bar')).to.have.length(1)
  })

  it('does not create an anchor if not  supplied a url', () => {
    expect(wrapper.find('a')).to.have.length(0)
  })

  it('creates an anchor if supplied a url', () => {
    expect(urlWrapper.find('a')).to.have.length(1)
  })

  it('creates an anchor with the supplied text', () => {
    expect(urlWrapper.find('a').text()).to.contain('foo')
  })

  it('can be disabled', () => {
    const disabledWrapper = shallow(
      <MenuItem isEnabled={false} />,
    )
    expect(disabledWrapper.find('li')).to.have.length(0)
  })
})
