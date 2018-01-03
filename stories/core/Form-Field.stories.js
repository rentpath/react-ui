import React from 'react'
import { Field } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

coreStory('Form / Field', module)
  .add('Field', () => (
    <Field
      className={StoryBookTheme['Story-padding']}
      label="Name"
      placeholder="Enter name"
    />
  ))
  .add('Select Field', () => (
    <Field
      className={StoryBookTheme['Story-padding']}
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
      className={StoryBookTheme['Story-padding']}
      type="checkbox"
      label="Option"
    />
  ))
  .add('Radio Field', () => (
    <Field
      className={StoryBookTheme['Story-padding']}
      type="radio"
      label="Radio"
      value="one-op"
      checked
    />
  ))
