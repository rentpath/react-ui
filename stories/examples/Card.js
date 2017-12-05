import React from 'react'
import { Theme, compose } from 'react-themed'
import { Card, List } from 'react-ui-core/src'
import { CardTheme } from '../theme'

const theme = compose({}, CardTheme)
const content = <List items={['One', 'Two', 'Three']} />

export const DefaultCard = (
  <Theme theme={theme}>
    <Card>
      {content}
    </Card>
  </Theme>
)
