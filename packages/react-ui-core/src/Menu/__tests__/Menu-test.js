import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedMenu from '../Menu'
import { List } from '../../List'

const Menu = ThemedMenu.WrappedComponent

const theme = {
  Menu: 'Menu',
}
const testListItem = () => <div />
const options = [1, 2, 3]
const objectOptions = [
  {
    label: 'Foo label',
    value: 'foo value',
  },
  {
    label: 'Bar label',
    value: 'bar value',
  },
  {
    label: 'Baz label',
    value: 'baz value',
  },
]
const objectOptionsWithLabel = [
  {
    label: 'Foo label',
    value: 'foo value',
  },
  {
    label: 'Bar label',
    value: 'bar value',
  },
  {
    label: 'Baz label',
    value: 'Baz Value',
    disabled: true,
  },
]
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
        options={options}
        {...props}
      />,
    )
    return {
      wrapper,
    }
  }

  it('should not barf if passed null options', () => {
    const { wrapper } = setup({ theme, options: null })
    expect(wrapper.find('ListItem')).toHaveLength(0)
  })

  it('should pass options to List component', () => {
    const { wrapper } = setup({ theme, options })
    expect(wrapper.find('ListItem')).toHaveLength(3)
  })

  it('should use element type specified by nodeType', () => {
    const { wrapper } = setup({ theme, options })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ nodeType: 'section' })
    expect(wrapper.find('section')).toHaveLength(1)
  })

  it('should apply props from listItem prop object to each option', () => {
    const { wrapper } = setup({ theme, options })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ listItem: { nodeType: 'section' } })
    expect(wrapper.find('section')).toHaveLength(3)
  })

  it('should use listItem prop component if passed', () => {
    const { wrapper } = setup({ theme, options })
    expect(wrapper.find(testListItem)).toHaveLength(0)
    wrapper.setProps({ listItem: testListItem })
    expect(wrapper.find(testListItem)).toHaveLength(3)
  })

  it('should perform on click functionality ', () => {
    const testObject = {
      value: -1,
    }

    const onItemSelect = jest.fn()

    const { wrapper } = setup({
      theme,
      options,
      onItemSelect,
    })

    expect(testObject.value).toEqual(-1)
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(onItemSelect).toHaveBeenCalledWith(options[1], 1)
  })

  it('should change highlighted index on up or down keydown', () => {
    const { wrapper } = setup({ options })

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
      options,
      onItemSelect: value => {
        testObject.value = value
      },
    })

    map.keydown({ keyCode: 13, preventDefault: () => { } })
    expect(testObject.value).toEqual(1)
  })

  it('should perform on mouseover functionality ', () => {
    const onItemSelect = jest.fn()
    const wrapper = mount(<Menu options={options} onItemSelect={onItemSelect} />)
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(onItemSelect).toHaveBeenCalledWith(options[1], 1)
  })

  describe('highlightOption', () => {
    it('should highlight valid indices', () => {
      const wrapper = shallow(<Menu options={options} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.highlightOption(1)
      expect(wrapperInst.state.highlightIndex).toEqual(1)
    })

    it('should not highlight invalid indices', () => {
      const wrapper = shallow(<Menu options={options} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.highlightOption(20)
      expect(wrapperInst.state.highlightIndex).toEqual(0)
    })
  })

  it('passes the selectedIndex prop to List', () => {
    const wrapper = shallow(<Menu options={options} selectedIndex={2} />)
    expect(wrapper.find(List).prop('selectedIndex')).toEqual(2)
  })

  describe('with object options', () => {
    it('passes the whole object to the onItemSelect function', () => {
      const onItemSelect = jest.fn()
      const wrapper = mount(<Menu options={objectOptions} onItemSelect={onItemSelect} />)
      wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
      expect(onItemSelect).toHaveBeenCalledWith(objectOptions[1], 1)
    })

    it('passes objects that do not have label key to List', () => {
      const optionsRandom = [
        {
          a: 'a',
          b: 'b',
        },
      ]
      const wrapper = shallow(<Menu options={optionsRandom} />)
      expect(wrapper.find(List).prop('items')).toEqual(optionsRandom)
    })
  })

  describe('with object with disabled key', () => {
    it('should not highlight disabed option indices by default', () => {
      const wrapper = shallow(<Menu options={[{ disabled: true }, { disabled: true }]} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.highlightOption(20)
      expect(wrapperInst.state.highlightIndex).toEqual(-1)
    })

    it('should not perform on click functionality', () => {
      const testObject = {
        value: -1,
      }

      const { wrapper } = setup({
        theme,
        options: objectOptionsWithLabel,
        onItemSelect: value => {
          testObject.value = value
        },
      })

      expect(testObject.value).toEqual(-1)
      const listItemTwo = wrapper.find('ListItem').at(2)
      listItemTwo.simulate('mouseenter')
      listItemTwo.simulate('click')
      expect(testObject.value).toEqual(-1)
    })

    it('should skip object index on up or down keydown', () => {
      const { wrapper } = setup({ options: objectOptionsWithLabel })
      expect(wrapper.state('highlightIndex')).toEqual(0)
      map.keydown({ keyCode: 40 })
      map.keydown({ keyCode: 40 })
      expect(wrapper.state('highlightIndex')).toEqual(1)
    })
  })
})
