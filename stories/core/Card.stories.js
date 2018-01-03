import React from 'react'
import { Card, List } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

const content = <List items={['One', 'Two', 'Three']} />

coreStory('Card', module)
  .add('Card', () => (
    <Card
      className={StoryBookTheme['Story-center']}
    >
      {content}
    </Card>
  ))
