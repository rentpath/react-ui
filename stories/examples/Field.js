import React from 'react'
import { Field } from 'react-ui-core/src'
import { FieldTheme } from '../theme'

export const SelectField = (
  <Field
    theme={FieldTheme}
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
    theme={FieldTheme}
  />
)

export const CheckboxField = (
  <Field
    theme={FieldTheme}
    type="checkbox"
    label="Option"
  />
)
