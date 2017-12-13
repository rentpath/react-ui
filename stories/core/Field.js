import React from 'react'
import { Field } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

export const SelectField = (
  <Field
    className={StoryBookTheme['Story-padding']}
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
    className={StoryBookTheme['Story-padding']}
    label="Name"
    placeholder="Enter name"
  />
)

export const CheckboxField = (
  <Field
    className={StoryBookTheme['Story-padding']}
    type="checkbox"
    label="Option"
  />
)

export const RadioField = (
  <Field
    className={StoryBookTheme['Story-padding']}
    type="radio"
    label="Radio"
    value="one-op"
    checked
  />
)
