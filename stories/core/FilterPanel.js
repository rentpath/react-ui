import React from 'react'
import {
  Form,
  Field,
  FieldSet,
  Modal,
} from 'react-ui-core/src'
import { examples as rangeSliderExamples } from './RangeSlider'
import StoryBookTheme from '../theme/Storybook.css'

const PriceSlider = () => rangeSliderExamples.withMinMaxStep

const Fields = () => (
  <FieldSet
    legend="Property Type"
    className={StoryBookTheme['Story_Fieldset-padding']}
  >
    <Field
      type="checkbox"
      label="Apartments"
    />
    <Field
      type="checkbox"
      label="Townhouses"
    />
    <Field
      type="checkbox"
      label="Condos"
    />
    <Field
      type="checkbox"
      label="Houses"
    />
  </FieldSet>
)

export default (
  <Modal isOpen>
    <Form>
      <PriceSlider />
      <Fields />
    </Form>
  </Modal>
)
