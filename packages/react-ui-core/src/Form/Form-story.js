import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import Field from '../Field'
import FieldSet from '../FieldSet'
import Form from '../Form'
import Modal from '../Modal'
import RangeSlider from '../RangeSlider'
import Text from '../Text'
import coreStory from '../.storybook/coreStory'

const Fields = () => (
  <FieldSet
    legend="Property Type"
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

const FilterPanel = props => (
  <Modal isOpen>
    <Form className={props.theme.FilterPanel}>
        <RangeSlider
          {...props}
          formatLabel={val => `$${val}`}
          maxValue={1500}
          minValue={800}
          onChangeComplete={val => action('onChangeComplete')(val)}
          value={{min: 800, max: 1500}}
        />
      <Fields />
    </Form>
  </Modal>
)

FilterPanel.propTypes = {
  theme: PropTypes.object,
}

const ThemedFilter = themed(['FilterPanel'])(FilterPanel)

coreStory('Form / Form', module)
  .add('Form', () => (
    <Form
    >
      <Text>Generic Form</Text>
      <Field
        label="Name"
        placeholder="Enter name"
      />
      <Field
        type="select"
        label="Priority"
        options={[
          { label: 'Low', value: 'low' },
          { label: 'High', value: 'high' },
        ]}
      />
      <Field
        type="textarea"
        label="Comments"
      />
      <Field
        type="checkbox"
        label="Option"
      />
    </Form>
  ))
  .add('Filter Panel Modal', () => (
      <ThemedFilter />
  ))
