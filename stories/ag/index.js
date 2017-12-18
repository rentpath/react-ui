import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import { AgThemeSmall, AgThemeLarge, AgThemeExamples } from '../theme'
import {
  DefaultFilterCard,
  OneButtonFilterCard,
  TwoButtonFilterCard,
  DesktopBedroomFilterCard,
  InlineBedroomFilterCard,
  DesktopPetFilterCard,
  InlinePetFilterCard,
  InlineRatingFilterCard,
} from './Filters'

const AgThemeSmallDecorator = storyFn => (
  <Theme theme={AgThemeSmall}>
    {storyFn()}
  </Theme>
)

const AgThemeLargeDecorator = storyFn => (
  <Theme theme={AgThemeLarge}>
    {storyFn()}
  </Theme>
)

const AgThemeExamplesDecorator = storyFn => (
  <Theme theme={AgThemeExamples}>
    {storyFn()}
  </Theme>
)

storiesOf('react-ui-ag / Filters / FilterCard', module)
  .addDecorator((story, context) => withInfo('FilterCard')(story)(context))
  .addDecorator(AgThemeExamplesDecorator)
  .add('Default', () => DefaultFilterCard)
  .add('One Button FilterCard', () => OneButtonFilterCard)
  .add('Two Button FilterCard', () => TwoButtonFilterCard)

storiesOf('react-ui-ag / Filters / BedroomFilterCard', module)
  .addDecorator((story, context) => withInfo('BedroomFilterCard')(story)(context))
  .addDecorator(AgThemeLargeDecorator)
  .add('large', () => DesktopBedroomFilterCard)

storiesOf('react-ui-ag / Filters / BedroomFilterCard', module)
  .addDecorator((story, context) => withInfo('BedroomFilterCard')(story)(context))
  .addDecorator(AgThemeSmallDecorator)
  .add('small', () => InlineBedroomFilterCard)

storiesOf('react-ui-ag / Filters / PetFilterCard', module)
  .addDecorator((story, context) => withInfo('PetFilterCard')(story)(context))
  .addDecorator(AgThemeLargeDecorator)
  .add('large', () => DesktopPetFilterCard)

storiesOf('react-ui-ag / Filters / PetFilterCard', module)
  .addDecorator((story, context) => withInfo('PetFilterCard')(story)(context))
  .addDecorator(AgThemeSmallDecorator)
  .add('small', () => InlinePetFilterCard)

storiesOf('react-ui-ag / Filters / RatingFilterCard', module)
  .addDecorator((story, context) => withInfo('RatingFilterCard')(story)(context))
  .addDecorator(AgThemeSmallDecorator)
  .add('small', () => InlineRatingFilterCard)
