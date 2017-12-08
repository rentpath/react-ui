import React from 'react'
import { action } from '@storybook/addon-actions'
import { RangeSlider } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

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
      <h4 className={StoryBookTheme['Story-alignCenter']}>
        Square Foot {`${value.min} ft - ${value.max} ft+`}
      </h4>
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
      <h4 className={StoryBookTheme['Story-alignCenter']}>
        Price Range {`${value.min} - ${value.max}+`}
      </h4>
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
  <div>
    <div className={StoryBookTheme['Story-padding']}>
      <h3>Default</h3>
      {examples.default}
    </div>
    <div className={StoryBookTheme['Story-padding']}>
      <h3>With Label</h3>
      {examples.withLabel}
    </div>
    <div className={StoryBookTheme['Story-padding']}>
      <h3>With Min / Max and Step</h3>
      {examples.withMinMaxStep}
    </div>
    <div className={StoryBookTheme['Story-padding']}>
      <h3>Square Foot Slider</h3>
      {examples.sqftSlider}
    </div>
    <div className={StoryBookTheme['Story-padding']}>
      <h3>Price Slider</h3>
      {examples.priceSlider}
    </div>
  </div>
)
