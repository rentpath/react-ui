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
  InlinePriceFilterCard,
  DesktopPriceFilterCard,
  DesktopPetFilterCard,
  InlinePetFilterCard,
  InlineRatingFilterCard,
  InlineBathroomFilterCard,
  DesktopBathroomFilterCard,
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

storiesOf('react-ui-ag / Filters / RadioGroupFilterCard / large', module)
  .addDecorator((story, context) => withInfo('RadioGroupFilterCard')(story)(context))
  .addDecorator(AgThemeLargeDecorator)
  .add('Bedroom', () => DesktopBedroomFilterCard)
  .add('Bathroom', () => DesktopBathroomFilterCard)
  .add('Pet', () => DesktopPetFilterCard)

storiesOf('react-ui-ag / Filters / RadioGroupFilterCard / small', module)
  .addDecorator((story, context) => withInfo('RadioGroupFilterCard')(story)(context))
  .addDecorator(AgThemeSmallDecorator)
  .add('Bedroom', () => InlineBedroomFilterCard)
  .add('Bathroom', () => InlineBathroomFilterCard)
  .add('Pet', () => InlinePetFilterCard)
  .add('Rating', () => InlineRatingFilterCard)

storiesOf('react-ui-ag / Filters / PriceFilterCard / large', module)
  .addDecorator((story, context) => withInfo('PriceFilterCard')(story)(context))
  .addDecorator(AgThemeLargeDecorator)
  .add('Price Filter', () => DesktopPriceFilterCard)

storiesOf('react-ui-ag / Filters / PriceFilterCard / small', module)
  .addDecorator((story, context) => withInfo('PriceFilterCard')(story)(context))
  .addDecorator(AgThemeSmallDecorator)
  .add('Price Filter', () => InlinePriceFilterCard)
