import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import Container from '../Container'
import { RentThemeSmall, RentThemeLarge } from '../theme'

const SmallThemeDecorator = storyFn => (
  <Theme theme={RentThemeSmall}>
    {storyFn()}
  </Theme>
)

const LargeThemeDecorator = storyFn => (
  <Theme theme={RentThemeLarge}>
    {storyFn()}
  </Theme>
)

export const largeStories = (name, mod) => (
  storiesOf(`react-ui-rent / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(LargeThemeDecorator)
)

export const smallStories = (name, mod) => (
  storiesOf(`react-ui-rent / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(SmallThemeDecorator)
)
