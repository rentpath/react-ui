import React from 'react'
import { action } from '@storybook/addon-actions'
import { RangeSlider } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

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
      className={StoryBookTheme['Story-padding']}
      maxValue={maxValue || 20}
      minValue={minValue || 0}
      onChangeComplete={val => action('onChangeComplete')(val)}
      value={value || 10}
    />
  )
}

coreStory('Form / RangeSlider', module)
  .add('RangeSlider', () => wrapper({}))
  .add('Labeled', () => wrapper({
    formatLabel: val => `$${val}`,
  }))
  .add('Min / Max and Step', () => wrapper({
    formatLabel: val => `$${val}`,
    value: {
      min: 800,
      max: 1500,
    },
    minValue: 300,
    maxValue: 3000,
    step: 100,
  }))
  .add('Square Foot Slider', () => wrapper({
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
  }))
  .add('Price Slider', () => wrapper({
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
  }))
