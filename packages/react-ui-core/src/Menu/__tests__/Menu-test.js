import React from 'react'
import { mount, shallow } from 'enzyme'
import Menu from '../Menu'

const theme = {
  Menu: 'Menu',
}

const items = [1, 2, 3]

describe('Menu', () => {
  const setup = props => {
    const wrapper = mount(
      <Menu
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
    expect(wrapper.find('ListItem')).toHaveLength(3)
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
    const listItemTwo = wrapper.find('ListItem').at(2)
    listItemTwo.simulate('mouseenter')
    listItemTwo.simulate('click')
    expect(testObject.value).toEqual(3)
  })

  describe('highlightOption', () => {
    it('should highlight valid indices', () => {
      const wrapper = shallow(<Menu options={items} />)
      const wrapperInst = wrapper.dive().instance()
      wrapperInst.highlightOption(1)
      expect(wrapperInst.state.highlightIndex).toEqual(1)
    })

    it('should not highlight invalid indices', () => {
      const wrapper = shallow(<Menu options={items} />)
      const wrapperInst = wrapper.dive().instance()
      wrapperInst.highlightOption(20)
      expect(wrapperInst.state.highlightIndex).toEqual(0)
    })
  })
})
