import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import Container from '../Container'
import { RentalsThemeSmall, RentalsThemeLarge } from '../theme'

const SmallThemeDecorator = storyFn => (
  <Theme theme={RentalsThemeSmall}>
    {storyFn()}
  </Theme>
)

const LargeThemeDecorator = storyFn => (
  <Theme theme={RentalsThemeLarge}>
    {storyFn()}
  </Theme>
)

export const largeStories = (name, mod) => (
  storiesOf(`react-ui-rentals / ${name}`, mod)
    .addDecorator(story => <Container story={story} />)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(LargeThemeDecorator)
)

export const smallStories = (name, mod) => (
  storiesOf(`react-ui-rentals / ${name}`, mod)
    .addDecorator(story => <Container story={story} />)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(SmallThemeDecorator)
)
