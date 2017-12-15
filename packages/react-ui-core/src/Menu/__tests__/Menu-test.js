import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedMenu from '../Menu'

const Menu = ThemedMenu.WrappedComponent

const theme = {
  Menu: 'Menu',
}
const testListItem = () => <div />
const items = [1, 2, 3]
const map = {}

describe('Menu', () => {
  beforeAll(() => {
    window.document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
  })

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

  it('should use element type specified by nodeType', () => {
    const { wrapper } = setup({ theme, options: items })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ nodeType: 'section' })
    expect(wrapper.find('section')).toHaveLength(1)
  })

  it('should apply props from listItem prop object to each option', () => {
    const { wrapper } = setup({ theme, options: items })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ listItem: { nodeType: 'section' } })
    expect(wrapper.find('section')).toHaveLength(3)
  })

  it('should use listItem prop component if passed', () => {
    const { wrapper } = setup({ theme, options: items })
    expect(wrapper.find(testListItem)).toHaveLength(0)
    wrapper.setProps({ listItem: testListItem })
    expect(wrapper.find(testListItem)).toHaveLength(3)
  })

  it('should perform on click functionality ', () => {
    const testObject = {
      value: -1,
    }

    const { wrapper } = setup({
      theme,
      options: items,
      onItemSelect: value => {
        testObject.value = value
      },
    })

    expect(testObject.value).toEqual(-1)
    const listItemTwo = wrapper.find('ListItem').at(2)
    listItemTwo.simulate('mouseenter')
    listItemTwo.simulate('click')
    expect(testObject.value).toEqual(3)
  })

  it('should change highlighted index on up or down keydown', () => {
    const { wrapper } = setup({ options: items })

    expect(wrapper.state('highlightIndex')).toEqual(0)

    map.keydown({ keyCode: 40 })
    expect(wrapper.state('highlightIndex')).toEqual(1)
  })

  it('should change highlighted index on enter keydown', () => {
    const testObject = {
      value: -1,
    }

    setup({
      theme,
      options: items,
      onItemSelect: value => {
        testObject.value = value
      },
    })

    map.keydown({ keyCode: 13, preventDefault: () => { } })
    expect(testObject.value).toEqual(1)
  })

  it('should perform on mouseover functionality ', () => {
    const testObject = {
      value: -1,
    }

    const { wrapper } = setup({
      theme,
      options: items,
      onItemMouseOver: value => {
        testObject.value = value
      },
    })

    expect(testObject.value).toEqual(-1)
    const listItemTwo = wrapper.find('ListItem').at(2)
    listItemTwo.simulate('mouseenter')
    expect(testObject.value).toEqual(3)
  })

  describe('highlightOption', () => {
    it('should highlight valid indices', () => {
      const wrapper = shallow(<Menu options={items} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.highlightOption(1)
      expect(wrapperInst.state.highlightIndex).toEqual(1)
    })

    it('should not highlight invalid indices', () => {
      const wrapper = shallow(<Menu options={items} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.highlightOption(20)
      expect(wrapperInst.state.highlightIndex).toEqual(0)
    })
  })
})
