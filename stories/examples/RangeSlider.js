import React from 'react'
import { action } from '@storybook/addon-actions'
import { RangeSlider } from 'react-ui-core/src'
import { RangeSliderTheme as theme } from '../theme'

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
      theme={theme}
      onChangeComplete={val => action('onChangeComplete')(val)}
      value={value || 10}
    />
  )
}

export const examples = {
  default: wrapper({}),
  withLabel: wrapper({
    formatLabel: val => `$${val}`,
  }),
  withMinMaxStep: wrapper({
    formatLabel: val => `$${val}`,
    value: {
      min: 800,
      max: 1500,
    },
    minValue: 300,
    maxValue: 3000,
    step: 100,
  }),
  sqftSlider: wrapper({
    formatHeader: value => (
      <div>
        <h2 className={theme.textCenter}>
          Square Foot
          <div className={theme.value}>
            {`${value.min} ft - ${value.max} ft+`}
          </div>
        </h2>
      </div>
    ),
    value: {
      min: 600,
      max: 2000,
    },
    minValue: 300,
    maxValue: 3500,
    step: 100,
  }),
  priceSlider: wrapper({
    formatHeader: value => (
      <div>
        <h2 className={theme.textCenter}>
          Price Range
          <div className={theme.value}>
            {`${value.min} - ${value.max}+`}
          </div>
        </h2>
      </div>
    ),
    value: {
      min: 500,
      max: 1000,
    },
    minValue: 300,
    maxValue: 3000,
    step: 100,
  }),
}

export default (
  <div className={theme.wrapper}>
    <h2>default</h2>
    {examples.default}
    <h2>with label</h2>
    {examples.withLabel}
    <h2>with min max and step</h2>
    {examples.withMinMaxStep}
    {examples.sqftSlider}
    {examples.priceSlider}
  </div>
)
