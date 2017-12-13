import React from 'react'
import { mount, shallow } from 'enzyme'
import DropdownMenu from '../DropdownMenu'

const theme = {
  DropdownMenu: 'DropdownMenu',
  DropdownMenu_ListItem: 'DropdownMenu_ListItem',
  DropdownMenu_Selected: 'DropdownMenu_Selected',
}

const items = [1, 2, 3]

describe('DropdownMenu', () => {
  const setup = props => {
    const wrapper = mount(
      <DropdownMenu
        theme={theme}
        options={items}
        {...props}
      />,
    )
    return {
      wrapper,
    }
  }

  it('should pass options to List component', () => {
    const { wrapper } = setup({ theme, options: items })

    expect(wrapper.find('[data-tid="dropdown-menu-list-item"]').length).toEqual(3)
  })

  it('should perform on click functionality ', () => {
    const testObject = {
      value: -1,
    }

    const { wrapper } = setup({
      theme,
      options: items,
      onSelection: value => {
        testObject.value = value
      },
    })

    expect(testObject.value).toEqual(-1)
    const listItemTwo = wrapper.find('[data-tid="dropdown-menu-list-item"]').at(2)
    listItemTwo.simulate('mouseenter')
    listItemTwo.simulate('click')
    expect(testObject.value).toEqual(3)
  })

  describe('activateOption', () => {
    it('should activate valid indices', () => {
      const wrapper = shallow(<DropdownMenu options={items} />)
      const wrapperInst = wrapper.dive().instance()
      wrapperInst.activateOption(1)
      expect(wrapperInst.state.activeIndex).toEqual(1)
    })

    it('should not activate invalid indices', () => {
      const wrapper = shallow(<DropdownMenu options={items} />)
      const wrapperInst = wrapper.dive().instance()
      wrapperInst.activateOption(20)
      expect(wrapperInst.state.activeIndex).toEqual(0)
    })
  })
})
