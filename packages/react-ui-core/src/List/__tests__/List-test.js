import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from './mocks/theme'
import ThemedList from '../List'
import ListItem from '../ListItem'

const List = ThemedList.WrappedComponent
const items = [1, 2, 3]

describe('List', () => {
  describe('mount', () => {
    const setup = props => shallow(<List theme={theme} {...props} />)

    it('applies a theme classname', () => {
      const className = setup().prop('className')
      expect(className).not.toEqual('List-')
    })

    it('passes through props to List Item', () => {
      const wrapper = mount(
        <List
          theme={theme}
          listItem={{ nodeType: 'span' }}
          items={items}
        />
      )
      expect(wrapper.find('ListItem').at(0).prop('nodeType')).toEqual('span')
    })

    it('accepts custom node type', () => {
      const wrapper = setup({ nodeType: 'div' })
      expect(wrapper.find('div').length).toBe(1)
    })

    it('accepts custom orientation', () => {
      const wrapper = setup({ orientation: 'horizontal' })
      const className = wrapper.find('ul').prop('className')
      expect(className).toEqual('List-horizontal')
    })

    describe('highlightIndex', () => {
      it('sets ListItem `activate` true when highlightIndex equals index', () => {
        const highlightIndex = 1
        const wrapper = setup({ highlightIndex, items })
        wrapper.find(ListItem).map((item, index) => { // eslint-disable-line
          const active = index === highlightIndex
          expect(item.prop('highlight')).toEqual(active)
        })
      })

      it('does not set ListItem `activate` true when no prop passed', () => {
        const wrapper = setup({ items })
        wrapper.find(ListItem).map((item, index) => { // eslint-disable-line
          expect(item.prop('highlight')).toEqual(false)
        })
      })
    })
  })

  describe('prop change', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<List theme={theme} />)
    })

    it('passes through props to List Item', () => {
      wrapper.setProps({ listItem: { nodeType: 'span' }, items })
      expect(wrapper.find('ul').childAt(0).prop('nodeType')).toEqual('span')
    })

    it('accepts custom node type', () => {
      wrapper.setProps({ nodeType: 'div' })
      expect(wrapper.find('div').length).toBe(1)
    })

    describe('orientation', () => {
      it('sets a default orienatation class', () => {
        const className = wrapper.find('ul').prop('className')
        expect(className).toEqual('List-vertical')
      })

      it('adds a className when passed', () => {
        wrapper.setProps({ orientation: 'horizontal' })
        const className = wrapper.find('ul').prop('className')
        expect(className).toEqual('List-horizontal')
      })
    })

    describe('highlightIndex', () => {
      it('sets ListItem `highlight` true when highlightIndex equals index', () => {
        const highlightIndex = 1
        wrapper.setProps({ highlightIndex, items })
        wrapper.find(ListItem).forEach((item, index) => {
          const active = index === highlightIndex
          expect(item.prop('highlight')).toEqual(active)
        })
      })
    })

    describe('selectedIndex', () => {
      it('sets ListItem `selected` true when highlightIndex equals index', () => {
        const selectedIndex = 1
        wrapper.setProps({ selectedIndex, items })
        wrapper.find(ListItem).forEach((item, index) => {
          const active = index === selectedIndex
          expect(item.prop('selected')).toEqual(active)
        })
      })
    })
  })
})
