import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from 'react-ui-core/src/Button'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

coreStory('Button', module)
  .add('Default Button', () => (
    <Button
      onClick={action('Clicked the button!')}
      className={StoryBookTheme['Story-center']}
    >
      Click Me
    </Button>
  ))
  .add('Colored Button', () => (
    <Button
      color="red"
      onClick={action('Clicked the red button!')}
      className={StoryBookTheme['Story-center']}
    >
      Click this red button
    </Button>
  ))
  .add('Small Button', () => (
    <Button
      size="small"
      onClick={action('Clicked the small button!')}
      className={StoryBookTheme['Story-center']}
    >
      Click this small button
    </Button>
  ))
  .add('Large Button', () => (
    <Button
      size="large"
      onClick={action('Clicked the large button!')}
      className={StoryBookTheme['Story-center']}
    >
      Click this large button
    </Button>
  ));
