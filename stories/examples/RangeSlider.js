import React from 'react'
import { action } from '@storybook/addon-actions'
import { RangeSlider } from 'react-ui-core/src'
import { RangeSliderTheme } from '../theme'

const wrapper = (props = {}) => {
  /* eslint-disable react/prop-types */
  const {
    minValue,
    maxValue,
    theme,
    value,
  } = props
  /* eslint-enable react/prop-types */

  return (
    <RangeSlider
      {...props}
      maxValue={maxValue || 20}
      minValue={minValue || 0}
      onChangeComplete={val => action('onChangeComplete')(val)}
      theme={theme || RangeSliderTheme}
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
    formatLabel: () => '',
    formatHeader: (min, max) =>
      (<div>
        <h2 className={RangeSliderTheme.textCenter}>
          Square Foot <br /> {min} ft - {max} ft+ <br />
        </h2>
      </div>),
    value: {
      min: 600,
      max: 2000,
    },
    minValue: 300,
    maxValue: 3500,
    step: 100,
  }),
  priceSlider: wrapper({
    formatLabel: () => '',
    formatHeader: (min, max) =>
      (<div>
        <h2 className={RangeSliderTheme.textCenter}>
          Price Range <br /> ${min} - ${max}+ <br />
        </h2>
      </div>),
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
  <div className={RangeSliderTheme.wrapper}>
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
