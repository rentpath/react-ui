import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import Container from '../Container'
import { AgThemeSmall, AgThemeLarge, AgThemeExamples } from '../theme'

const SmallThemeDecorator = storyFn => (
  <Theme theme={AgThemeSmall}>
    {storyFn()}
  </Theme>
)

const LargeThemeDecorator = storyFn => (
  <Theme theme={AgThemeLarge}>
    {storyFn()}
  </Theme>
)

const ExampleThemeDecorator = storyFn => (
  <Theme theme={AgThemeExamples}>
    {storyFn()}
  </Theme>
)

export const exampleStories = (name, mod) => (
  storiesOf(`react-ui-ag / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(ExampleThemeDecorator)
)

export const largeStories = (name, mod) => (
  storiesOf(`react-ui-ag / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(LargeThemeDecorator)
)

export const smallStories = (name, mod) => (
  storiesOf(`react-ui-ag / ${name}`, mod)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(story => <Container story={story} />)
    .addDecorator(SmallThemeDecorator)
)
