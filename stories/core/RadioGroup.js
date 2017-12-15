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

export const ImageButtonsRadioGroup = (
  <RadioGroup
    name="animals"
    orientation="vertical"
    hideInputElement
    handleChange={event => action('change')(event.target.value)}
    fields={[
      {
        value: 'lion',
        label: {
          children: (
            <div>
              OMG Lion!!!
              <img style={{ width: '100px' }} alt="lion" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Mr._Smart_LION.svg" />
            </div>
          ),
        },
      },
      {
        value: 'tiger',
        label: {
          children: (
            <div>
              OMG Tiger!!!
              <img style={{ width: '100px' }} alt="tiger" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg" />
            </div>
          ),
        },
      },
      {
        value: 'bear',
        label: {
          children: (
            <div>
              OMG Bear!!!
              <img style={{ width: '100px' }} alt="bear" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bear_rampant.svg/2000px-Bear_rampant.svg.png" />
            </div>
          ),
        },
      },
      {
        value: 'ohmy',
        label: {
          children: (
            <div>
              <img style={{ width: '300px' }} alt="oh my" src="https://media.giphy.com/media/H7iEm8CKI9ZAs/giphy.gif" />
            </div>
          ),
        },
      },
    ]}
  />
)
