import React from 'react'
import { action } from '@storybook/addon-actions'
import RadioGroup from '../RadioGroup'
import coreStory from '../.storybook/coreStory'

coreStory('Form / RadioGroup', module)
  .add('Radiogroup', () => (
    <RadioGroup
      data-tid="foobar"
      name={'radio-group-1'}
      fields={[
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: false, value: 'Two' },
      ]}
      onChange={event => action('change')(event.target.value)}
    />
  ))
  .add('Vertical Radiogroup as Buttons', () => (
    <RadioGroup
      name={'radio-group-2'}
      orientation="vertical"
      hideInputElement
      fields={[
        { label: 'Uno', checked: true, value: 'Uno' },
        { label: 'Dos', checked: false, value: 'Dos' },
      ]}
      onChange={event => action('change')(event.target.value)}
    />
  ))
  .add('Vertical Radiogroup', () => (
    <RadioGroup
      name={'radio-group-3'}
      orientation="vertical"
      fields={[
        { label: 'Un', checked: false, value: 'Un' },
        { label: 'Deux', checked: true, value: 'Deux' },
      ]}
      onChange={event => action('change')(event.target.value)}
    />
  ))
  .add('Image Buttons in RadioGroup', () => (
    <RadioGroup
      name="animals"
      orientation="vertical"
      hideInputElement
      onChange={event => action('change')(event.target.value)}
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
  ))
