import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import {
  Form,
  Field,
  FieldSet,
  Modal,
} from 'react-ui-core/src'
import { MinMaxStepRangeSlider } from './RangeSlider'

const Slider = () => MinMaxStepRangeSlider

const Fields = () => (
  <FieldSet legend="Property Type">
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

const FilterPanel = props => (
  <Modal isOpen>
    <Form className={props.theme.FilterPanel}>
      <Slider />
      <Fields />
    </Form>
  </Modal>
)

FilterPanel.propTypes = {
  theme: PropTypes.object,
}

const ThemedFilter = themed(['FilterPanel'])(FilterPanel)

export default (<ThemedFilter />)
