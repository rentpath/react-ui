import React from 'react'
import { mount } from 'enzyme'
import ThemedDropdownMenu from '../DropdownMenu'
import Menu from '../Menu'

const DropdownMenu = ThemedDropdownMenu.WrappedComponent

describe('DropdownMenu', () => {
  const props = {
    options: ['foo', 'bar', 'baz', 'qux'],
  }

  it('changes the text of the dropdown anchor when a menu selection is made', () => {
    const wrapper = mount(<DropdownMenu {...props} />)
    expect(wrapper.find('button[data-tid="dropdown-anchor"]').text()).toEqual('foo')
    wrapper.find('button[data-tid="dropdown-anchor"]').simulate('click')
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(wrapper.find('button[data-tid="dropdown-anchor"]').text()).toEqual('bar')
  })

  it('renders a Menu when the anchor is clicked', () => {
    const wrapper = mount(<DropdownMenu {...props} />)
    expect(wrapper.find(Menu)).toHaveLength(0)
    wrapper.find('button[data-tid="dropdown-anchor"]').simulate('click')
    expect(wrapper.find(Menu)).toHaveLength(1)
  })

  it('renders the anchor field using the createAnchorText prop function if provided', () => {
    const createAnchorText = item => `hi! here is ${item}`
    const wrapper = mount(<DropdownMenu {...props} createAnchorText={createAnchorText} />)
    expect(wrapper.find('button[data-tid="dropdown-anchor"]').text()).toEqual('hi! here is foo')
  })

  it('passes the selected item and index to onItemSelect when selection occurs', () => {
    const onItemSelect = jest.fn()
    const wrapper = mount(<DropdownMenu {...props} onItemSelect={onItemSelect} />)
    wrapper.find('button[data-tid="dropdown-anchor"]').simulate('click')
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(onItemSelect).toHaveBeenCalledWith('bar', 1)
  })
})
