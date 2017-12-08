import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from 'react-ui-core/src/Button'

export const DefaultButton = (
  <Button
    onClick={action('Clicked the buton!')}
  >
    Click Me
  </Button>
)

export const ButtonWithColor = (
  <Button
    color="red"
    onClick={action('Clicked the red buton!')}
  >
    Click this red button
  </Button>
)

export const ButtonLarge = (
  <Button
    size="large"
    onClick={action('Clicked the large buton!')}
  >
    Click this large button
  </Button>
)

export const ButtonSmall = (
  <Button
    color="small"
    onClick={action('Clicked the small buton!')}
  >
    Click this small button
  </Button>
)
