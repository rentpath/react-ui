import React from 'react'
import { mount, shallow } from 'enzyme'
import { Title, Text } from '@rentpath/react-ui-core'

import ThemedFilterCard from '../FilterCard'

const FilterCard = ThemedFilterCard.WrappedComponent

describe('ag/Filters/FilterCard', () => {
  it('renders children', () => {
    const children = <div data-tid="filter-card-children">Content of Children</div>
    const wrapper = shallow(<FilterCard>{children}</FilterCard>)
    expect(wrapper.find('div[data-tid="filter-card-children"]')).toHaveLength(1)
  })

  it('renders a title if provided', () => {
    const props = {
      title: 'this is a fake title',
    }
    const wrapper = shallow(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find(Title).prop('children')).toEqual(props.title)
  })

  it('does not render a title if no title is provided', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find(Title)).toHaveLength(0)
  })

  it('renders a description if provided', () => {
    const props = {
      description: 'this is a fake description',
    }
    const wrapper = shallow(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find(Text).prop('children')).toEqual(props.description)
  })

  it('does not render a description if no description is provided', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find(Text)).toHaveLength(0)
  })

  it('renders an apply button if onApplyClick is provided', () => {
    const onApplyClick = jest.fn()
    const props = { onApplyClick }
    const wrapper = mount(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find('button[data-tid="apply-button"]')).toHaveLength(1)
    wrapper.find('button[data-tid="apply-button"]').simulate('click')
    expect(onApplyClick.mock.calls).toHaveLength(1)
  })

  it('renders a cancel button if onCancelClick is provided', () => {
    const onCancelClick = jest.fn()
    const props = { onCancelClick }
    const wrapper = mount(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find('button[data-tid="cancel-button"]')).toHaveLength(1)
    wrapper.find('button[data-tid="cancel-button"]').simulate('click')
    expect(onCancelClick.mock.calls).toHaveLength(1)
  })

  it('does not render a cancel button if onApplyClick is not provided', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find('[data-tid="filter-card-apply-button"]')).toHaveLength(0)
  })

  it('does not render an apply button if onCancelClick is not provided', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find('[data-tid="filter-card-cancel-button"]')).toHaveLength(0)
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<FilterCard className="foo" />)
    expect(wrapper.prop('className')).toBe('foo')
  })
})
