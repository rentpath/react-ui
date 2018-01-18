import React from 'react'
import { Field } from 'react-ui-core/src'

export const SelectField = (
  <Field
    type="select"
    label="Priority"
    options={[
      { label: 'Low', value: 'low' },
      { label: 'High', value: 'high' },
    ]}
  />
)

export const DefaultField = (
  <Field
    label="Name"
    placeholder="Enter name"
  />
)

export const CheckboxField = (
  <Field
    type="checkbox"
    label="Option"
  />
)

export const RadioField = (
  <Field
    type="radio"
    label="Radio"
    value="one-op"
    checked
  />
)
