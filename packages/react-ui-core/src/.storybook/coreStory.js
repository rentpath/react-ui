import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { Theme } from 'react-themed'
import theme from './theme'
import StorybookTheme from './theme/Storybook.css'

const Container = ({ story }) => (
  <div className={StorybookTheme['Story-center']}>
    {story()}
  </div>
)

const CoreThemeDecorator = storyFn => (
  <Theme theme={theme}>
    {storyFn() }
  </Theme>
)

export default (name, mod) => (
  storiesOf('react-ui-core / ' + name, mod)
    .addDecorator(story => <Container story={story} />)
    .addDecorator((story, context) => withInfo(name)(story)(context))
    .addDecorator(CoreThemeDecorator)
)
