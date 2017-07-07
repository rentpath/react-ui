import React from 'react'
import {
  Text,
  Form,
  Field,
} from 'react-ui-core/src'

import { FilterPanelTheme } from '../theme'
import { examples as rangeSliderExamples } from './RangeSlider'

const PriceSlider = rangeSliderExamples.withMinMaxStep

export default (() => {

  return (
    <Form theme={FilterPanelTheme}>
      { PriceSlider }
    </Form>
  )
})()
