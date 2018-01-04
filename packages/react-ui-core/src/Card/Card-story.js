import React from 'react'
import Card from '../Card'
import List from '../List'
import coreStory from '../.storybook/coreStory'

coreStory('Card', module)
  .add('Card', () => (
    <Card>
      <List items={['One', 'Two', 'Three']} />
    </Card>
  ))
