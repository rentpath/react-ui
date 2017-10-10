import React from 'react'
import {
  Button,
  Form,
  Field,
  FieldSet,
  Grid,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from 'react-ui-core/src'

import { FilterPanelTheme as theme } from '../theme'
import { examples as rangeSliderExamples } from './RangeSlider'

const PriceSlider = () => rangeSliderExamples.withMinMaxStep

const Fields = () => (
  <FieldSet
    legend="Property Type"
  >
    <Grid fluid>
      <Row>
        <Col className={theme.col}>
          <Field
            type="checkbox"
            label="Apartments"
          />
        </Col>
        <Col className={theme.col}>
          <Field
            type="checkbox"
            label="Townhouses"
          />
        </Col>
      </Row>
      <Row>
        <Col className={theme.col}>
          <Field
            type="checkbox"
            label="Condos"
          />
        </Col>
        <Col className={theme.col}>
          <Field
            type="checkbox"
            label="Houses"
          />
        </Col>
      </Row>
    </Grid>
  </FieldSet>
)

export default (
  <Modal>
    <ModalBody>
      <Form theme={theme}>
        <PriceSlider />
        <Fields />
      </Form>
    </ModalBody>
    <ModalFooter className={theme.ModalFooter}>
      <Button>Show Apartments</Button>
    </ModalFooter>
  </Modal>
)
