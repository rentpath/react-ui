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

  it('renders an apply button if onClick is provided to applyButton', () => {
    const onClick = jest.fn()
    const props = { applyButton: { onClick } }
    const wrapper = mount(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find('button[data-tid="apply-button"]')).toHaveLength(1)
    wrapper.find('button[data-tid="apply-button"]').simulate('click')
    expect(onClick.mock.calls).toHaveLength(1)
  })

  it('renders a cancel button if onClick is provided to cancelButton', () => {
    const onClick = jest.fn()
    const props = { cancelButton: { onClick } }
    const wrapper = mount(<FilterCard {...props}>This is some child text</FilterCard>)
    expect(wrapper.find('button[data-tid="cancel-button"]')).toHaveLength(1)
    wrapper.find('button[data-tid="cancel-button"]').simulate('click')
    expect(onClick.mock.calls).toHaveLength(1)
  })

  it('does not render a apply button if onClick is not provided to applyButton', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find('[data-tid="filter-card-apply-button"]')).toHaveLength(0)
  })

  it('does not render an cancel button if onClick is not provided to cancelButton', () => {
    const wrapper = shallow(<FilterCard>This is some child text</FilterCard>)
    expect(wrapper.find('[data-tid="filter-card-cancel-button"]')).toHaveLength(0)
  })

  it('applies a custom className', () => {
    const wrapper = shallow(<FilterCard className="foo" />)
    expect(wrapper.prop('className')).toBe('foo')
  })
})
