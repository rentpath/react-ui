import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../Button'
import coreStory from '../.storybook/coreStory'

coreStory('Button', module)
  .add('Default Button', () => (
    <Button
      onClick={action('Clicked the button!')}
    >
      Click Me
    </Button>
  ))
  .add('Colored Button', () => (
    <Button
      color="red"
      onClick={action('Clicked the red button!')}
    >
      Click this red button
    </Button>
  ))
  .add('Small Button', () => (
    <Button
      size="small"
      onClick={action('Clicked the small button!')}
    >
      Click this small button
    </Button>
  ))
  .add('Large Button', () => (
    <Button
      size="large"
      onClick={action('Clicked the large button!')}
    >
      Click this large button
    </Button>
  ));
