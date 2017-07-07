import React from 'react'
import { RangeSlider } from 'react-ui-core/src'
import { RangeSliderTheme } from '../theme'
import { action } from '@storybook/addon-actions'

const wrapper = (props = {}) => {
  const {
    minValue,
    maxValue,
    theme,
    value,
  } = props

  return (
    <RangeSlider
      {...props}
      maxValue={maxValue || 20}
      minValue={minValue || 0}
      onChange={(value) => action('onChange')(value)}
      onChangeComplete={(value) => action('onChangeComplete')(value)}
      theme={theme || RangeSliderTheme}
      value={value || 10}
    />
  )
}

export const examples = {
  default: wrapper({}),
  withLabel: wrapper({
    formatLabel: (val) => (`$${val}`),
  }),
  withMinMaxStep: wrapper({
    formatLabel: (val) => (`$${val}`),
    value: {
      min: 800,
      max: 1500,
    },
    minValue: 300,
    maxValue: 3000,
    step: 100,
  })
}

export default (
  <div className={RangeSliderTheme.wrapper}>
    <h2>default</h2>
    { examples.default }
    <h2>with label</h2>
    { examples.withLabel }
    <h2>with min and max and step</h2>
    { examples.withMinMaxStep }
  </div>
)
