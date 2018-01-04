import React from 'react'
import Text from '../Text'
import coreStory from '../.storybook/coreStory'

coreStory('Text', module)
  .add('Text', () => (
    <Text> Some example text </Text>
  ))
