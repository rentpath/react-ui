import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedDropdownMenu from '../DropdownMenu'
import Menu from '../Menu'
import MenuWrapper from '../MenuWrapper'

const DropdownMenu = ThemedDropdownMenu.WrappedComponent

describe('DropdownMenu', () => {
  const props = {
    options: ['foo', 'bar', 'baz', 'qux'],
  }

  const objectProps = {
    options: [
      {
        label: 'Foo label',
        value: 'foo-value',
      },
      {
        label: 'Bar label',
        value: 'bar-value',
      },
      {
        label: 'Baz label',
        value: 'baz-value',
      },
    ],
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

  it('allows an initial selection to be chosen with selectedIndex prop', () => {
    const wrapper = mount(<DropdownMenu {...props} selectedIndex={2} />)
    expect(wrapper.find('button[data-tid="dropdown-anchor"]').text()).toEqual('baz')
  })

  it('sets the selectedIndex using selectedValue with objects as props', () => {
    const wrapper = shallow(<DropdownMenu {...objectProps} selectedValue="baz-value" />)
    expect(wrapper.state('selectedIndex')).toEqual(2)
  })

  it('changes the selectedIndex in state when a new selectedIndex is received', () => {
    const wrapper = shallow(<DropdownMenu {...objectProps} />)
    expect(wrapper.state('selectedIndex')).toEqual(0)
    wrapper.setProps({ selectedIndex: 1 })
    expect(wrapper.state('selectedIndex')).toEqual(1)
  })

  it('changes the selectedIndex in state when a new selectedValue is received', () => {
    const wrapper = shallow(<DropdownMenu {...objectProps} />)
    expect(wrapper.state('selectedIndex')).toEqual(0)
    wrapper.setProps({ selectedValue: 'bar-value' })
    expect(wrapper.state('selectedIndex')).toEqual(1)
  })

  it('passes the selectedIndex to the Menu', () => {
    const wrapper = shallow(<DropdownMenu {...props} selectedIndex={2} />)
    expect(wrapper.find(MenuWrapper).prop('selectedIndex')).toEqual(2)
  })
})
