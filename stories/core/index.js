import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import { CoreTheme } from '../theme'
import CompleteForm from './CompleteForm'
import FilterPanel from './FilterPanel'
import Collapsible from './Collapsible'
import {
  DefaultRangeSlider,
  RangeSliderLabel,
  MinMaxStepRangeSlider,
  SquareFootSlider,
  PriceSlider,
} from './RangeSlider'
import Grid from './Grid'
import Text from './Text'
import ResponsiveTemplate from './ResponsiveTemplate'
import {
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
} from './Button'
import {
  DefaultField,
  SelectField,
  CheckboxField,
} from './Field'

import {
  DefaultModal,
  CloseModal,
  ModalNoOverlayClose,
  ModalPopup,
} from './Modal'

import {
  DefaultCounter,
  CounterStep,
  CounterText,
  CounterCustomButtons,
} from './Counter'

import {
  DefaultRatings,
  SquareRatings,
  CircleRatings,
  ThreeRatings,
  ManyRatings,
  Partial,
  PartialTwoColor,
} from './Ratings'

import {
  DefaultList,
  HorizontalList,
  ListWithPassedNodeTypes,
  ListWithOwnItemComponent,
} from './List'

import {
  DefaultCard,
} from './Card'

import {
  DefaultRadioGroup,
  ButtonRadioGroup,
  VerticalRadioGroup,
  ImageButtonsRadioGroup,
} from './RadioGroup'

import {
  DefaultTitle,
  EmbeddedLinkWithinTitle,
} from './Title'

import {
  DefaultDropdown,
  DropdownWithProps,
  DropdownWithMenu,
  DropDownInputAnchor,
  DropdownCloseOnOptionSelect,
} from './Dropdown'

import {
  AutoSuggestFieldSubmitButton,
  AutoSuggestFieldClearButton,
  AutoSuggestFieldDynamicResults,
} from './AutoSuggestField'

import {
  DefaultLeadForm,
  DefaultLeadModal,
} from './Lead'

import {
  DefaultMenu,
  MenuOnSelection,
  MenuOnSelectionHover,
} from './Menu'

const CoreThemeDecorator = storyFn => (
  <Theme theme={CoreTheme}>
    {storyFn()}
  </Theme>
)

storiesOf('react-ui-core / Button', module)
  .addDecorator((story, context) => withInfo('Button')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Button', () => DefaultButton)
  .add('Colored Button', () => ButtonWithColor)
  .add('Small Button', () => ButtonSmall)
  .add('Large Button', () => ButtonLarge)

storiesOf('react-ui-core / Layout', module)
  .addDecorator((story, context) => withInfo('Layout')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Grid', () => Grid)
  .add('Responsive Template', () => ResponsiveTemplate)

storiesOf('react-ui-core / Form / Form', module)
  .addDecorator((story, context) => withInfo('Form')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Form', () => CompleteForm)
  .add('Filter Panel Modal', () => FilterPanel)

storiesOf('react-ui-core / Form / RangeSlider', module)
  .addDecorator((story, context) => withInfo('Slider')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('RangeSlider', () => DefaultRangeSlider)
  .add('Labeled', () => RangeSliderLabel)
  .add('Min / Max and Step', () => MinMaxStepRangeSlider)
  .add('Square Foot Slider', () => SquareFootSlider)
  .add('Price Slider', () => PriceSlider)

storiesOf('react-ui-core / Form / Field', module)
  .addDecorator((story, context) => withInfo('Field')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Field', () => DefaultField)
  .add('Select Field', () => SelectField)
  .add('Checkbox Field', () => CheckboxField)

storiesOf('react-ui-core / Form / RadioGroup', module)
  .addDecorator((story, context) => withInfo('RadioGroup')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Radiogroup', () => DefaultRadioGroup)
  .add('Vertical Radiogroup as Buttons', () => ButtonRadioGroup)
  .add('Vertical Radiogroup', () => VerticalRadioGroup)
  .add('Image Buttons in RadioGroup', () => ImageButtonsRadioGroup)

storiesOf('react-ui-core / Modal', module)
  .addDecorator((story, context) => withInfo('Modal')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(CoreThemeDecorator)
  .add('Modal', () => DefaultModal)
  .add('Modal With Close Button', () => CloseModal)
  .add('Modal No Close on Overlay', () => ModalNoOverlayClose)
  .add('Modal Open By Click', ModalPopup)

storiesOf('react-ui-core / Text', module)
  .addDecorator((story, context) => withInfo('Text')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Text', () => Text)

storiesOf('react-ui-core / Collapsible', module)
  .addDecorator((story, context) => withInfo('Collapsible')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Collapsible', () => Collapsible)

storiesOf('react-ui-core / Counter', module)
  .addDecorator((story, context) => withInfo('Counter')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Counter', () => DefaultCounter)
  .add('Different Step Counter', () => CounterStep)
  .add('Custom Text Counter', () => CounterText)
  .add('Custom Buttons Counter', () => CounterCustomButtons)

storiesOf('react-ui-core / Ratings', module)
  .addDecorator((story, context) => withInfo('Ratings')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Ratings', () => DefaultRatings)
  .add('Square Rating', () => SquareRatings)
  .add('Circle Rating', () => CircleRatings)
  .add('3 Ratings', () => ThreeRatings)
  .add('Many Ratings', () => ManyRatings)
  .add('Partial Rating', () => Partial)
  .add('Two Color Rating', () => PartialTwoColor)

storiesOf('react-ui-core / List', module)
  .addDecorator((story, context) => withInfo('List')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('List', () => DefaultList)
  .add('Horizontal List', () => HorizontalList)
  .add('Custom Node Type List', () => ListWithPassedNodeTypes)
  .add('Custom ListItem List', () => ListWithOwnItemComponent)

storiesOf('react-ui-core / Card', module)
  .addDecorator((story, context) => withInfo('Card')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Card', () => DefaultCard)

storiesOf('react-ui-core / Title', module)
  .addDecorator((story, context) => withInfo('Title')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Title', () => DefaultTitle)
  .add('Link Title', () => EmbeddedLinkWithinTitle)

storiesOf('react-ui-core / Menu', module)
  .addDecorator((story, context) => withInfo(' Menu')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Menu', () => DefaultMenu)
  .add('On Keyboard Selection', () => MenuOnSelection)
  .add('On Selection hover', () => MenuOnSelectionHover)

storiesOf('react-ui-core / Dropdown', module)
  .addDecorator((story, context) => withInfo('Dropdown')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Dropdown', () => DefaultDropdown)
  .add('Anchor Props', () => DropdownWithProps)
  .add('Input Anchor without close toggle', () => DropDownInputAnchor)
  .add('Multiple Children', () => DropdownWithMenu)
  .add('Dynamic button text closes on option selection ', () => DropdownCloseOnOptionSelect)

storiesOf('react-ui-core / AutoSuggestField', module)
  .addDecorator((story, context) => withInfo('AutoSuggest Field')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Field and Submit Button', () => AutoSuggestFieldSubmitButton)
  .add('Field and Clear Button', () => AutoSuggestFieldClearButton)
  .add('Dynamic Results', () => AutoSuggestFieldDynamicResults)

storiesOf('react-ui-core / Lead', module)
  .addDecorator((story, context) => withInfo('Core Lead')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('LeadForm', () => DefaultLeadForm)
  .add('LeadModal', () => DefaultLeadModal)
