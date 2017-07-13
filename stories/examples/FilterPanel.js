import React from 'react'
import {
  Text,
  Form,
  Field,
  FieldSet,
  Grid,
  Row,
  Col,
} from 'react-ui-core/src'

import { FilterPanelTheme } from '../theme'
import { examples as rangeSliderExamples } from './RangeSlider'

const PriceSlider = rangeSliderExamples.withMinMaxStep

const propertyTypeSet = () => (
  <FieldSet
    legend="Property Type"
    theme={FilterPanelTheme}
  >
    <Grid fluid>
      <Row>
        <Col className={FilterPanelTheme.propertyTypeColumn}>
          <Field
            className={FilterPanelTheme.propertyTypeInput}
            type="checkbox"
            label="Apartments"
          />
        </Col>
        <Col className={FilterPanelTheme.propertyTypeColumn}>
          <Field
            className={FilterPanelTheme.propertyTypeInput}
            type="checkbox"
            label="Townhouses"
          />
        </Col>
      </Row>
      <Row>
        <Col className={FilterPanelTheme.propertyTypeColumn}>
          <Field
            className={FilterPanelTheme.propertyTypeInput}
            type="checkbox"
            label="Condos"
          />
        </Col>
        <Col className={FilterPanelTheme.propertyTypeColumn}>
          <Field
            className={FilterPanelTheme.propertyTypeInput}
            type="checkbox"
            label="Houses"
          />
        </Col>
      </Row>
    </Grid>
  </FieldSet>
)

export default (
  <Form theme={FilterPanelTheme}>
    { PriceSlider }
    { propertyTypeSet() }
  </Form>
)
