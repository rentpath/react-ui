import React from 'react'
import { action } from '@storybook/addon-actions'
import { DatePicker } from 'react-ui-core/src'

export const DefaultDatePicker = (
  <DatePicker
    value="10/10/2019"
    onChange={action('picked a date')}
    placeholder="Date"
  />
)

export const DatePickerReadOnly = (
  <DatePicker
    value="11/01/2019"
    onChange={action('picked a date')}
    placeholder="Date"
    readOnly
  />
)

export const DatePickerCustomFormat = (
  <DatePicker
    dateFormat="MM-dd-YYYY"
    onChange={action('picked a date')}
    placeholder="Date"
  />
)
