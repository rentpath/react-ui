import React from 'react'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedListItem from '../ListItem'

const ListItem = ThemedListItem.WrappedComponent

describe('ListItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <ListItem theme={theme} />,
    )
  })

  describe('props', () => {
    it('applies a theme classname', () => {
      wrapper.setProps({ theme })
      const className = wrapper.find('li').prop('className')
      expect(className).toEqual('ListItem')
    })

    it('accepts custom node type', () => {
      wrapper.setProps({ nodeType: 'div', theme })
      expect(wrapper.find('div').length).toBe(1)
    })

    describe('highlight prop', () => {
      it('adds a highlight class when true', () => {
        wrapper.setProps({ highlight: true })
        expect(wrapper.prop('className')).toContain('ListItem-highlight')
      })

      it('does not add a highlight class when undefined / false', () => {
        expect(wrapper.prop('className')).not.toContain('ListItem-highlight')
      })
    })

    describe('selected prop', () => {
      it('adds a selected class when true', () => {
        wrapper.setProps({ selected: true })
        expect(wrapper.prop('className')).toContain('ListItem-selected')
      })

      it('does not add a selected class when undefined / false', () => {
        expect(wrapper.prop('className')).not.toContain('ListItem-selected')
      })
    })
  })

  describe('onMouseEnter', () => {
    it('calls a function when prop passed', () => {
      const onMouseEnter = jest.fn()
      wrapper.setProps({ onMouseEnter })
      wrapper.simulate('mouseenter')
      expect(onMouseEnter).toHaveBeenCalled()
    })
  })
})
