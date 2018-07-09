import React from 'react'
import { mount } from 'enzyme'
import { PriceFilterCard } from '@rentpath/react-ui-core'
import ThemedPriceFilterDropdown from '../PriceFilterDropdown'
import DropdownAnchorText from '../DropdownAnchorText'

const PriceFilterDropdown = ThemedPriceFilterDropdown.WrappedComponent

describe('PriceFilterDropdown', () => {
  const props = {
    anchorText: <DropdownAnchorText defaultText="Price" />,
    priceSlider: {
      formatLabel: val => `$${val}`,
      value: { min: 500, max: 5000 },
      minValue: 0,
      maxValue: 15000,
      step: 100,
    },
  }

  it('changes the text of the dropdown anchor when the value is set', () => {
    const wrapper = mount(<PriceFilterDropdown {...props} />)
    const value = {
      min: 234,
      max: 456,
    }
    expect(wrapper.find(DropdownAnchorText).text()).toContain('Price')
    wrapper.setState({ value })
    expect(wrapper.find(DropdownAnchorText).text()).toContain('$234-$456')
  })

  it('renders a PriceFilterCard when the anchor is clicked', () => {
    const wrapper = mount(<PriceFilterDropdown {...props} />)
    expect(wrapper.find(PriceFilterCard)).toHaveLength(0)
    wrapper.find('button[data-tid="dropdown-anchor"]').simulate('click')
    expect(wrapper.find(PriceFilterCard)).toHaveLength(1)
  })
})
