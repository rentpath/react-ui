import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import {
  Form,
  Field,
  FieldSet,
  Modal,
  Text
} from 'react-ui-core/src'
import { RangeSlider } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

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

const FilterPanel = props => (
  <Modal isOpen>
    <Form className={props.theme.FilterPanel}>
        <RangeSlider
          {...props}
          formatLabel={val => `$${val}`}
          className={StoryBookTheme['Story-padding']}
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
      className={StoryBookTheme['Story-padding']}
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


