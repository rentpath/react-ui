import React from 'react'
import { mount } from 'enzyme'
import DropDownMenu from '../DropDownMenu'

const theme = {
  DropDownMenu: 'DropDownMenu',
  DropDownMenu_ListItem: 'DropDownMenu_ListItem',
  DropDownMenu_Selected: 'DropDownMenu_Selected',
}

const items = [1, 2, 3]

describe('DropDownMenu', () => {
  const setup = props => {
    const wrapper = mount(
      <DropDownMenu
        theme={theme}
        options={items}
        {...props}
      />,
    )
    return {
      wrapper,
    }
  }

  it('Should pass options to List component', () => {
    const { wrapper } = setup({ theme, options: items })

    expect(wrapper.find('[data-tid="dropdown-menu-list-item"]').length).toEqual(3)
  })

  it('Should perform on click funcationality ', () => {
    const testObject = {
      value: -1,
    }

    const { wrapper } = setup({
      theme,
      options: items,
      onSelection: value => {
        testObject.value = value
        console.log(value)
      },
    })

    expect(testObject.value).toEqual(-1)
    wrapper.find('[data-tid="dropdown-menu-list-item"]').at(2).simulate('mouseEnter')
    wrapper.find('[data-tid="dropdown-menu-list-item"]').at(2).simulate('click')
    expect(testObject.value).toEqual(3)
  })
})
