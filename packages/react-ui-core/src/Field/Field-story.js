import React from 'react'
import Field from '../Field'
import coreStory from '../.storybook/coreStory'

coreStory('Form / Field', module)
  .add('Field', () => (
    <Field
      label="Name"
      placeholder="Enter name"
    />
  ))
  .add('Select Field', () => (
    <Field
      type="select"
      label="Priority"
      options={[
        { label: 'Low', value: 'low' },
        { label: 'High', value: 'high' },
      ]}
    />
  ))
  .add('Checkbox Field', () => (
    <Field
      type="checkbox"
      label="Option"
    />
  ))
  .add('Radio Field', () => (
    <Field
      type="radio"
      label="Radio"
      value="one-op"
      checked
    />
  ))
