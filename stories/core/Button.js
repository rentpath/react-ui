import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, ToggleButton } from 'react-ui-core/src/Button'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultButton = (
  <Button
    onClick={action('Clicked the button!')}
    className={StoryBookTheme['Story-center']}
  >
    Click Me
  </Button>
)

export const ButtonWithColor = (
  <Button
    color="red"
    className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the red button!')}
  >
    Click this red button
  </Button>
)

export const ButtonLarge = (
  <Button
    size="large"
    className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the large button!')}
  >
    Click this large button
  </Button>
)

export const ButtonSmall = (
  <Button
    size="small"
    className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the small button!')}
  >
    Click this small button
  </Button>
)

export const ToggleSVG = (
  <ToggleButton
    className={StoryBookTheme['Story-center']}
    onClick={value => {
      action('The button is ')(`${(value) ? 'toggled' : 'untoggled'}`)
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg" width="20" height="20"
      viewBox="-2 -2 24 24"
    >
      <path fillRule="evenodd" d="M10 15.765l-6.188 3.247 1.2-6.87L0 7.27l6.918-1.012L10 0l3.082 6.259L20 7.27l-5.012 4.87 1.2 6.87z" />
    </svg>
  </ToggleButton>
)
