import React from 'react'
import { action } from '@storybook/addon-actions'
import { RadioGroup } from 'react-ui-core/src/Form'

export const DefaultRadioGroup = (
  <RadioGroup
    data-tid="foobar"
    name={'radio-group-1'}
    fields={[
      { label: 'One', checked: false, value: 'One' },
      { label: 'Two', checked: false, value: 'Two' },
    ]}
    handleChange={event => action('change')(event.target.value)}
  />
)

export const ButtonRadioGroup = (
  <RadioGroup
    name={'radio-group-2'}
    orientation="vertical"
    hideInputElement
    fields={[
      { label: 'Uno', checked: true, value: 'Uno' },
      { label: 'Dos', checked: false, value: 'Dos' },
    ]}
    handleChange={event => action('change')(event.target.value)}
  />
)

export const VerticalRadioGroup = (
  <RadioGroup
    name={'radio-group-3'}
    orientation="vertical"
    fields={[
      { label: 'Un', checked: false, value: 'Un' },
      { label: 'Deux', checked: true, value: 'Deux' },
    ]}
    handleChange={event => action('change')(event.target.value)}
  />
)
