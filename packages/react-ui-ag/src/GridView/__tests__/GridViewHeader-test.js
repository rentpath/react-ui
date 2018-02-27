import React from 'react'
import { shallow } from 'enzyme'
import { Text, DropdownMenu } from '@rentpath/react-ui-core'
import theme from './mocks/theme'
import ThemedGridViewHeader from '../GridViewHeader'

const GridViewHeader = ThemedGridViewHeader.WrappedComponent

describe('GridViewHeader', () => {
  const props = {
    theme,
  }

  it('uses the GridViewHeader className', () => {
    const wrapper = shallow(<GridViewHeader {...props} />)
    expect(wrapper.hasClass('GridViewHeader')).toBeTruthy()
  })

  it('passes extra props to the wrapping div', () => {
    const wrapper = shallow(<GridViewHeader {...props} foo="bar" />)
    expect(wrapper.find('[data-tid="grid-view-header"]').prop('foo')).toEqual('bar')
  })

  it('passes the counter prop to the Text component', () => {
    const wrapper = shallow(<GridViewHeader {...props} counter="blah" />)
    expect(wrapper.find(Text).prop('children')).toEqual('blah')
  })

  it('passes sort props to the dropdown menu', () => {
    const sortMenu = { options: ['foo', 'bar'] }
    const wrapper = shallow(<GridViewHeader {...props} sortMenu={sortMenu} />)
    expect(wrapper.find(DropdownMenu).prop('options')).toEqual(sortMenu.options)
  })
})
