import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from 'react-ui-core/src/Button'
import StoryBookTheme from '../theme/Storybook.css'

export const DefaultButton = (
  <Button
    onClick={action('Clicked the button!')}
  //  className={StoryBookTheme['Story-center']}
  >
    Click Me
  </Button>
)

export const ButtonWithColor = (
  <Button
    color="red"
    //className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the red button!')}
  >
    Click this red button
  </Button>
)

export const ButtonLarge = (
  <Button
    size="large"
 //   className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the large button!')}
  >
    Click this large button
  </Button>
)

export const ButtonSmall = (
  <Button
    size="small"
//    className={StoryBookTheme['Story-center']}
    onClick={action('Clicked the small button!')}
  >
    Click this small button
  </Button>
)
