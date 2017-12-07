import React from 'react'
import { Card, List } from 'react-ui-core/src'

const content = <List items={['One', 'Two', 'Three']} />

export const DefaultCard = (
  <Card>
    {content}
  </Card>
)
