import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import Container from '../Container'
import { CoreTheme } from '../theme'

const CoreThemeDecorator = storyFn => (
  <Theme theme={CoreTheme}>
    {storyFn() }
  </Theme>
)

export default (name, mod) => (
  storiesOf(`react-ui-core / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(CoreThemeDecorator)
)
