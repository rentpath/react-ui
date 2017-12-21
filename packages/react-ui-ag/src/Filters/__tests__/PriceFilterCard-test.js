import React from 'react'
import { mount, shallow } from 'enzyme'
import { RangeSlider } from '@rentpath/react-ui-core'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedPriceFilterCard from '../PriceFilterCard'

const PriceFilterCard = ThemedPriceFilterCard.WrappedComponent

describe('ag/Filters/PriceFilterCard', () => {
  it('renders a Price Slider', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find('[data-tid="price-filter-card-slider"]')).toHaveLength(1)
  })

  it('renders no buttons by default', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeFalsy()
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeFalsy()
  })

  it('renders the apply button once a value is chosen', () => {
    const wrapper = mount(<PriceFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('PriceFilterCard-noValue')).toBeTruthy()
    wrapper.setState({ hasPriceChanged: 1400 })
    expect(wrapper.find(FilterCard).hasClass('PriceFilterCard-noValue')).toBeFalsy()
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find('[data-tid="price-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<PriceFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="price-filter-card"]')).toHaveLength(0)
  })

  it('updates state when props get updated', () => {
    const wrapper = mount(<PriceFilterCard />, { lifecycleExperimental: true })
    const defaultPriceSliderProps = {
      formatLabel: val => `$${val}`,
      value: { min: 500, max: 5000 },
      minValue: 0,
      maxValue: 15000,
      step: 100,
    }

    expect(wrapper.state().hasPriceChanged).toBeFalsy()
    expect(wrapper.state().priceSlider.minValue).toEqual(defaultPriceSliderProps.minValue)
    expect(wrapper.state().priceSlider.maxValue).toEqual(defaultPriceSliderProps.maxValue)
    expect(wrapper.state().priceSlider.step).toEqual(defaultPriceSliderProps.step)
    expect(wrapper.state().priceSlider.value).toEqual(defaultPriceSliderProps.value)

    const updatedPriceSliderProps = {
      ...defaultPriceSliderProps,
      value: { min: 1000, max: 9000 },
    }

    wrapper.setProps({
      priceSlider: updatedPriceSliderProps,
    })

    wrapper.find(RangeSlider).prop('onChangeComplete')({ min: 1500, max: 8000 })

    expect(wrapper.state().hasPriceChanged).toBeTruthy()
  })
})
