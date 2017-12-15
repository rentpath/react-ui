import React from 'react'
import { Card, List } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

const content = <List items={['One', 'Two', 'Three']} />

export const DefaultCard = (
  <Card
    className={StoryBookTheme['Story-center']}
  >
    {content}
  </Card>
)
