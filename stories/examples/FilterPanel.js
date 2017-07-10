import React from 'react'
import {
  Text,
  Form,
  Field,
  FieldGroup,
} from 'react-ui-core/src'

import { FilterPanelTheme } from '../theme'
import { examples as rangeSliderExamples } from './RangeSlider'

const PriceSlider = rangeSliderExamples.withMinMaxStep

const propertyTypeGroup = () => (
  <FieldGroup
    label="Property Type"
    theme={FilterPanelTheme}
    columns={2}
  >
    <Field type="checkbox" label="Apartments" />
    <Field type="checkbox" label="Townhouses" />
    <Field type="checkbox" label="Condos" />
    <Field type="checkbox" label="Houses" />
  </FieldGroup>
)

export default (
  <Form theme={FilterPanelTheme}>
    { PriceSlider }
    { propertyTypeGroup() }
  </Form>
)
