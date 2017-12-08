import React from 'react'
import { mount } from 'enzyme'

// import theme from './mocks/theme'
import DropDownMenu from '../DropDownMenu'

const theme = {
  // DropDownMenu: 'DropDownMenu',
  // DropDownMenu_ListItem: 'DropDownMenu_ListItem',
  // DropDownMenu_Selected: 'DropDownMenu_Selected',
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
    // wrapper.find('[data-tid="dropdown-menu-list-item"]')[2].simulate('click')
    // expect(wrapper.find('.DropDownMenu_Selected').length).toEqual(0)
  })

  it('Should perform on clock funcationality ', () => {
    const { wrapper } = setup({ theme, options: items })

    expect(wrapper.find('[data-tid="dropdown-menu-list-item"]').length).toEqual(3)
    // wrapper.find('[data-tid="dropdown-menu-list-item"]')[2].simulate('click')
    // expect(wrapper.find('.DropDownMenu_Selected').length).toEqual(0)
  })
})
