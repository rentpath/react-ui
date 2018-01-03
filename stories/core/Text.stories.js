import React from 'react'
import { Text } from '../../packages/react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

coreStory('Text', module)
  .add('Text', () => (
    <Text
      className={StoryBookTheme['Story-center']}
    >
      Some example text
    </Text>
  ))
