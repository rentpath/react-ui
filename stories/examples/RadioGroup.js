import React from 'react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider, compose } from 'react-themed'
import { RadioGroup } from 'react-ui-core/src/Form'
import { RadioGroupTheme, RadioButtonTheme } from '../theme'

const theme = compose({},
  RadioGroupTheme,
  RadioButtonTheme,
)

export const DefaultRadioGroup = (
  <ThemeProvider theme={theme}>
    <RadioGroup
      data-tid="foobar"
      name={'radio-group-1'}
      fields={[
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: false, value: 'Two' },
      ]}
      onChange={event => action('change')(event.target.value)}
    />
  </ThemeProvider>
)

export const ButtonRadioGroup = (
  <ThemeProvider theme={theme}>
    <RadioGroup
      name={'radio-group-2'}
      orientation="vertical"
      hideInput
      fields={[
        { label: 'Uno', checked: true, value: 'Uno' },
        { label: 'Dos', checked: false, value: 'Dos' },
      ]}
      onChange={event => action('change')(event.target.value)}
    />
  </ThemeProvider>
)

export const VerticalRadioGroup = (
  <RadioGroup
    theme={RadioGroupTheme}
    name={'radio-group-3'}
    orientation="vertical"
    fields={[
      { label: 'Un', checked: false, value: 'Un' },
      { label: 'Deux', checked: true, value: 'Deux' },
    ]}
    onChange={event => action('change')(event.target.value)}
  />
)
