import React from 'react'
import {
  Text,
  Form,
  Field,
} from 'react-ui-core/src'

export default (
  <Form>
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
)
