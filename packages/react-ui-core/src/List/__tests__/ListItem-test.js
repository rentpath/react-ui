import React from 'react'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedListItem from '../ListItem'

const ListItem = ThemedListItem.WrappedComponent

describe('ListItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <ListItem />,
    )
  })

  it('applies a theme classname', () => {
    wrapper.setProps({ theme })
    const className = wrapper.find('li').prop('className')
    expect(className).toEqual('ListItem')
  })

  it('accepts custom node type', () => {
    wrapper.setProps({ nodeType: 'div', theme })
    expect(wrapper.find('div').length).toBe(1)
  })
})
