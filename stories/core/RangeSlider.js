import React from 'react'
import { action } from '@storybook/addon-actions'
import { RangeSlider } from 'react-ui-core/src'

const wrapper = (props = {}) => {
  /* eslint-disable react/prop-types */
  const {
    minValue,
    maxValue,
    value,
  } = props
  /* eslint-enable react/prop-types */

  return (
    <RangeSlider
      {...props}
      maxValue={maxValue || 20}
      minValue={minValue || 0}
      onChangeComplete={val => action('onChangeComplete')(val)}
      value={value || 10}
    />
  )
}

export const DefauldRangeSlider = wrapper({})

export const RangeSliderLabel = wrapper({
  formatLabel: val => `$${val}`,
})

export const MinMaxStepRangeSlider = wrapper({
  formatLabel: val => `$${val}`,
  value: {
    min: 800,
    max: 1500,
  },
  minValue: 300,
  maxValue: 3000,
  step: 100,
})

export const SquareFootSlider = wrapper({
  formatHeader: value => (
    <h4>
      {`Square Foot ${value.min} ft - ${value.max} ft+`}
    </h4>
  ),
  value: {
    min: 600,
    max: 2000,
  },
  minValue: 300,
  maxValue: 3500,
  step: 100,
})

export const PriceSlider = wrapper({
  formatHeader: value => (
    <h4>
      {`Price Range ${value.min} - ${value.max}+`}
    </h4>
  ),
  value: {
    min: 500,
    max: 1000,
  },
  minValue: 300,
  maxValue: 3000,
  step: 100,
})
