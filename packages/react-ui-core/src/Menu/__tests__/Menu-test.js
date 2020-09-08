import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedMenu, { ARROW_UP, ARROW_DOWN, ENTER } from '../Menu'
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
    window.document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback
    })
  })

  const setup = props => (
    mount(
      <Menu
        theme={theme}
        options={options}
        {...props}
      />,
    )
  )

  it('does not barf if passed null options', () => {
    const wrapper = setup({ theme, options: null })
    expect(wrapper.find('ListItem')).toHaveLength(0)
  })

  it('passes options to List component', () => {
    const wrapper = setup({ theme, options })
    expect(wrapper.find('ListItem')).toHaveLength(3)
  })

  it('uses element type specified by nodeType', () => {
    const wrapper = setup({ theme, options })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ nodeType: 'section' })
    expect(wrapper.find('section')).toHaveLength(1)
  })

  it('applies props from listItem prop object to each option', () => {
    const wrapper = setup({ theme, options })
    expect(wrapper.find('section')).toHaveLength(0)
    wrapper.setProps({ listItem: { nodeType: 'section' } })
    expect(wrapper.find('section')).toHaveLength(3)
  })

  it('uses listItem prop component if passed', () => {
    const wrapper = setup({ theme, options })
    expect(wrapper.find(testListItem)).toHaveLength(0)
    wrapper.setProps({ listItem: testListItem })
    expect(wrapper.find(testListItem)).toHaveLength(3)
  })

  it('performs on click functionality ', () => {
    const testObject = {
      value: -1,
    }

    const onItemSelect = jest.fn()

    const wrapper = setup({
      theme,
      options,
      onItemSelect,
    })

    expect(testObject.value).toEqual(-1)
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(onItemSelect).toHaveBeenCalledWith(options[1], 1, 'click')
  })

  it('changes highlighted index on up or down keydown', () => {
    const wrapper = setup({ options })
    expect(wrapper.state('highlightIndex')).toEqual(-1)

    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    expect(wrapper.state('highlightIndex')).toEqual(0)

    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    expect(wrapper.state('highlightIndex')).toEqual(1)

    map.keydown({ keyCode: ARROW_UP, preventDefault: () => {} })
    expect(wrapper.state('highlightIndex')).toEqual(0)
  })

  it('changes highlighted index on enter keydown', () => {
    const onItemSelect = jest.fn()

    setup({
      theme,
      options,
      onItemSelect,
    })

    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    map.keydown({ keyCode: ENTER, preventDefault: () => {} })
    expect(onItemSelect).toHaveBeenCalledWith(1, 0, 'keydown')
  })

  it('performs on mouseover functionality ', () => {
    const onItemSelect = jest.fn()
    const onItemKeyOver = jest.fn()
    const onItemMouseOver = jest.fn()
    const wrapper = mount(
      <Menu
        options={options}
        onItemSelect={onItemSelect}
        onItemKeyOver={onItemKeyOver}
        onItemMouseOver={onItemMouseOver}
      />
    )
    wrapper.find('ListItem').at(1).simulate('mouseenter').simulate('click')
    expect(onItemSelect).toHaveBeenCalledWith(options[1], 1, 'click')
    expect(onItemKeyOver).not.toHaveBeenCalled()
    expect(onItemMouseOver).toHaveBeenCalled()
  })

  describe('onMouseEnter', () => {
    it('highlights valid indices', () => {
      const wrapper = shallow(<Menu options={options} />)
      wrapper.instance().onMouseEnter(1)
      expect(wrapper.state('highlightIndex')).toEqual(1)
    })

    it('does not highlight invalid indices', () => {
      const wrapper = shallow(<Menu options={options} />)
      wrapper.instance().onMouseEnter(20)
      expect(wrapper.state('highlightIndex')).toEqual(-1)
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
      expect(onItemSelect).toHaveBeenCalledWith(objectOptions[1], 1, 'click')
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
    it('does not highlight disabed option indices by default', () => {
      const wrapper = shallow(<Menu options={[{ disabled: true }, { disabled: true }]} />)
      const wrapperInst = wrapper.instance()
      wrapperInst.onMouseEnter(20)
      expect(wrapperInst.state.highlightIndex).toEqual(-1)
    })

    it('should not perform on click functionality', () => {
      const testObject = {
        value: -1,
      }

      const wrapper = setup({
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

    it('skips an object index on up or down keydown', () => {
      const wrapper = setup({ options: objectOptionsWithLabel })
      map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
      expect(wrapper.state('highlightIndex')).toEqual(0)

      map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
      map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
      expect(wrapper.state('highlightIndex')).toEqual(1)
    })
  })

  it('calls onItemKeyOver when the arrow down key is hit', () => {
    const onItemKeyOver = jest.fn()
    const onItemMouseOver = jest.fn()
    setup({ onItemKeyOver, onItemMouseOver })
    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    expect(onItemKeyOver).toHaveBeenCalledWith(1)
    expect(onItemMouseOver).not.toHaveBeenCalled()
  })

  it('calls onItemKeyOver when the arrow up key is hit', () => {
    const onItemKeyOver = jest.fn()
    const onItemMouseOver = jest.fn()
    const wrapper = setup({ onItemKeyOver, onItemMouseOver })
    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    map.keydown({ keyCode: ARROW_DOWN, preventDefault: () => {} })
    onItemKeyOver.mockReset() // ignore key down pushes
    map.keydown({ keyCode: ARROW_UP, preventDefault: () => {} })
    wrapper.update()
    expect(onItemKeyOver).toHaveBeenCalledWith(1)
    expect(onItemMouseOver).not.toHaveBeenCalled()
  })

  it('resets the index to -1 when new options come in', () => {
    const wrapper = shallow(<Menu options={options} />)
    wrapper.setProps({ highlightIndex: 2 })
    expect(wrapper.state('highlightIndex')).toEqual(2)
    wrapper.setProps({ options: objectOptions })
    expect(wrapper.state('highlightIndex')).toEqual(-1)
  })
})
