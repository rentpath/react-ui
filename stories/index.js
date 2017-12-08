import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Theme } from 'react-themed'
import {
  CoreTheme,
  RentTheme,
} from './theme'

import {
  CompleteForm,
  Text,
  DefaultField,
  SelectField,
  CheckboxField,
  DefaultRadioGroup,
  ButtonRadioGroup,
  VerticalRadioGroup,
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  DefaultModal,
  CloseModal,
  ModalNoOverlayClose,
  ModalPopup,
  FilterPanel,
  RangeSlider,
  Grid,
  ResponsiveTemplate,
  Collapse,
  DefaultCounter,
  CounterStep,
  CounterText,
  CounterCustomButtons,
  MapExample,
  DefaultRatings,
  SquareRatings,
  CircleRatings,
  ThreeRatings,
  ManyRatings,
  Partial,
  PartialTwoColor,
  DefaultList,
  HorizontalList,
  ListWithPassedNodeTypes,
  ListWithOwnItemComponent,
  DefaultLeadModal,
  DefaultCard,
  DefaultTitle,
  EmbeddedLinkWithinTitle,
  DefaultDropDown,
  InputDropDown,
  DefaultDropDownMenu,
  DropDownMenuOnSelection,
  DropDownMenuOnSelectionHover,
} from './examples'

const CoreThemeDecorator = storyFn => (
  <Theme theme={CoreTheme}>
    {storyFn()}
  </Theme>
)

const RentThemeDecorator = storyFn => (
  <Theme theme={RentTheme}>
    {storyFn()}
  </Theme>
)

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo('Button')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultButton)
  .add('with color', () => ButtonWithColor)
  .add('small', () => ButtonSmall)
  .add('large', () => ButtonLarge)

storiesOf('Layout', module)
  .addDecorator((story, context) => withInfo('Layout')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Grid', () => Grid)
  .add('Responsive template', () => ResponsiveTemplate)

storiesOf('Form', module)
  .addDecorator((story, context) => withInfo('Form')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Form', () => CompleteForm)
  .add('Filter Panel', () => FilterPanel)

storiesOf('RangeSlider', module)
  .addDecorator((story, context) => withInfo('Slider')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('examples', () => RangeSlider)

storiesOf('Field', module)
  .addDecorator((story, context) => withInfo('Field')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultField)
  .add('with type select', () => SelectField)
  .add('with type checkbox', () => CheckboxField)

storiesOf('RadioGroup', module)
  .addDecorator((story, context) => withInfo('RadioGroup')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultRadioGroup)
  .add('rendered vertically as buttons', () => ButtonRadioGroup)
  .add('rendered vertically', () => VerticalRadioGroup)

storiesOf('Modal', module)
  .addDecorator((story, context) => withInfo('Modal')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultModal)
  .add('with close button', () => CloseModal)
  .add('with no overlay close', () => ModalNoOverlayClose)
  .add('with popup', ModalPopup)

storiesOf('Text', module)
  .addDecorator((story, context) => withInfo('Text')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => Text)

storiesOf('Collapsible', module)
  .addDecorator((story, context) => withInfo('Collapsible')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => Collapse)

storiesOf('Counter', module)
  .addDecorator((story, context) => withInfo('Counter')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultCounter)
  .add('step changed', () => CounterStep)
  .add('custom text', () => CounterText)
  .add('custom buttons', () => CounterCustomButtons)

storiesOf('Map', module)
  .addDecorator((story, context) => withInfo('Map')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => MapExample)

storiesOf('Ratings', module)
  .addDecorator((story, context) => withInfo('Ratings')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultRatings)
  .add('Square Rating', () => SquareRatings)
  .add('Circle Rating', () => CircleRatings)
  .add('3 Rating', () => ThreeRatings)
  .add('Many Ratings', () => ManyRatings)
  .add('Partial Rating', () => Partial)
  .add('Two-color Rating', () => PartialTwoColor)

storiesOf('List', module)
  .addDecorator((story, context) => withInfo('List')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('default', () => DefaultList)
  .add('Horizontal List', () => HorizontalList)
  .add('List with passed node types', () => ListWithPassedNodeTypes)
  .add('List with own item component', () => ListWithOwnItemComponent)

storiesOf('Card', module)
  .addDecorator((story, context) => withInfo('Card')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Default Card', () => DefaultCard)

storiesOf('Title', module)
  .addDecorator((story, context) => withInfo('Title')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Default Title', () => DefaultTitle)
  .add('Embedded Link within Title', () => EmbeddedLinkWithinTitle)

storiesOf('Rent Lead', module)
  .addDecorator((story, context) => withInfo('Rent Lead')(story)(context))
  .addDecorator(RentThemeDecorator)
  .add('Default themed', () => DefaultLeadModal)

storiesOf('Drop Down', module)
  .addDecorator((story, context) => withInfo('Default Drop Down')(story)(context))
  .addDecorator(CoreThemeDecorator)
  .add('Drop Down with default anchor', () => DefaultDropDown)
  .add('Drop Down with custom Input anchor', () => InputDropDown)
  
storiesOf('DropDown', module)
  .addWithInfo('default', 'Default Drop Down', () => DefaultDropDown)
  .addWithInfo('input', 'Input Drop Down', () => InputDropDown)

storiesOf('DropDownMenu', module)
  .addWithInfo('default', 'Default Drop Down Menu', () => DefaultDropDownMenu)
  .addWithInfo('On Selection', 'Drop Down On Selection', () => DropDownMenuOnSelection)
  .addWithInfo('On Selection Hover', 'Drop Down On Selection hover', () => DropDownMenuOnSelectionHover)
  
