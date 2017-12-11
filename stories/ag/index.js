import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import { AgTheme } from '../theme'
import {
  DefaultFilterCard,
  OneButtonFilterCard,
  TwoButtonFilterCard,
} from './Filters'

const AgThemeDecorator = storyFn => (
  <Theme theme={AgTheme}>
    {storyFn()}
  </Theme>
)

storiesOf('react-ui-ag / Filters / FilterCard', module)
  .addDecorator((story, context) => withInfo('AG FilterCard')(story)(context))
  .addDecorator(AgThemeDecorator)
  .add('Default', () => DefaultFilterCard)
  .add('One Button FilterCard', () => OneButtonFilterCard)
  .add('Two Button FilterCard', () => TwoButtonFilterCard)
