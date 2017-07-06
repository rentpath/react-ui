import React from 'react'
import { FormTheme } from '../theme'
import {
  Text,
  Form,
  Field,
} from 'react-ui-core/lib'

export default (
  <Form theme={FormTheme}>
    <Text theme={FormTheme}>Generic Form</Text>
    <Field
      label="Name"
      placeholder="Enter name"
      theme={FormTheme}
    />
    <Field
      theme={FormTheme}
      type="select"
      label="Priority"
      options={[
        { label: 'Low', value: 'low' },
        { label: 'High', value: 'high' }
      ]}
    />
    <Field
      theme={FormTheme}
      type="textarea"
      label="Comments"
    />
  </Form>
)
