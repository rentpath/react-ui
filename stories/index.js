import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs } from '@storybook/addon-knobs'
import {
  CompleteForm,
  Text,
  DefaultField,
  SelectField,
  CheckboxField,
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  DefaultModal,
  ModalNoOverlayClose,
  ModalPopup,
  FilterPanel,
  RangeSlider,
  Grid,
  ResponsiveTemplate,
  SettingSvg,
  SettingWithColor,
  SettingWithHeightWidth,
  SearchSvg,
  SearchWithColor,
  SearchWithHeightWidth,
} from './examples'

storiesOf('Button', module)
  .addWithInfo('default', 'Default themed button', () => DefaultButton)
  .addWithInfo('with color', 'Button with color prop added', () => ButtonWithColor)
  .addWithInfo('small', 'Small button with size prop set', () => ButtonSmall)
  .addWithInfo('large', 'Large button with size prop set', () => ButtonLarge)

storiesOf('Layout', module)
  .addWithInfo('Grid', 'grids rows and columns using flexbox', () => Grid)
  .addWithInfo('Responsive template', 'responsive template using flexbox', () => ResponsiveTemplate)

storiesOf('Form', module)
  .addWithInfo('complete form', 'Form with multiple components added', () => CompleteForm)
  .addWithInfo('Filter Panel', 'Form with multiple components added', () => FilterPanel)

storiesOf('RangeSlider', module)
  .addWithInfo('examples', 'slider input', () => RangeSlider)

storiesOf('Field', module)
  .addWithInfo('default', 'Default field is text input', () => DefaultField)
  .addWithInfo('with type select', 'Field with prop type set to select', () => SelectField)
  .addWithInfo('with type checkbox', 'Field with prop type set to checkbox', () => CheckboxField)

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => DefaultModal)
  .add('with no overlay click', () => ModalNoOverlayClose)
  .add('with popup', ModalPopup)

storiesOf('Text', module)
  .addWithInfo('default', 'Default themed text', () => Text)

storiesOf('Svg', module)
  .addWithInfo('settingDefault', 'Default Setting Svg', () => SettingSvg)
  .addWithInfo('settingWithColor', 'Setting Svg with color prop added', () => SettingWithColor)
  .addWithInfo('settingWithHeightWidth', 'Setting Svg heigth width prop added', () => SettingWithHeightWidth)
  .addWithInfo('searchDefault', 'Default Search Svg', () => SearchSvg)
  .addWithInfo('searchWithColor', 'Svg with color prop added', () => SearchWithColor)
  .addWithInfo('searchWithHeightWidth', 'Svg with height width prop added', () => SearchWithHeightWidth)

