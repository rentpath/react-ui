import React from 'react'
import { FieldTheme } from '../theme'
import { Field } from '../../src'

export const SelectField = (
  <Field
    theme={FieldTheme}
    type="select"
    label="Priority"
    options={[
      { label: 'Low', value: 'low' },
      { label: 'High', value: 'high' }
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
