import React from 'react'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedList from '../List'

const List = ThemedList.WrappedComponent
const items = [1, 2, 3]

describe('List', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <List />,
      { lifecycleExperimental: true }
    )
  })

  it('applies a theme classname', () => {
    wrapper.setProps({ theme })
    const className = wrapper.prop('className')
    expect(className).toEqual('List-vertical')
  })

  it('passes through props to List Item', () => {
    wrapper.setProps({ listItemNodeType: 'span', theme, items })
    expect(wrapper.find('ul').childAt(0).prop('nodeType')).toEqual('span')
  })

  it('accepts custom node type', () => {
    wrapper.setProps({ nodeType: 'div', theme })
    expect(wrapper.find('div').length).toBe(1)
  })

  it('accepts custom orientation', () => {
    wrapper.setProps({ orientation: 'horizontal', theme })
    const className = wrapper.find('ul').prop('className')
    expect(className).toEqual('List-horizontal')
  })
})
