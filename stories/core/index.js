import FilterPanel from './FilterPanel'
import Form from './Form'
import {
  DefaultRangeSlider,
  RangeSliderLabel,
  MinMaxStepRangeSlider,
  SquareFootSlider,
  PriceSlider,
} from './RangeSlider'
import Grid from './Grid'
import Text from './Text'

import {
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  ToggleSVG,
} from './Button'

import ResponsiveTemplate from './ResponsiveTemplate'
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
  DefaultRatingBar,
  SquareRatingBar,
  CircleRatingBar,
  LabeledRatingBar,
  MaxScoreTenRatingBar,
  PartialRatingBar,
  ColorFilledRatingBar,
  TwoColoredRatingBar,
} from './RatingBar'

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

import {
  DefaultHighlighter,
  HighlighterWithIndex,
} from './Highlighter'

import {
  DefaultCarousel,
  CarouselPaginationPrevious,
  CarouselPaginationNext,
  CarouselNavigation,
  PhotoCarouselExample,
} from './Carousel'

import MapPage from './Mapbox'

import {
  DefaultListingCell,
  ThemedListingCell,
} from './ListingCell'

import coreStories from './coreStories'

coreStories('AutoSuggestField', module)
  .add('Field and Submit Button', () => AutoSuggestFieldSubmitButton)
  .add('Field and Clear Button', () => AutoSuggestFieldClearButton)
  .add('Dynamic Results with highlighted suggestions', () => AutoSuggestFieldDynamicResults)

coreStories('Button', module)
  .add('Button', () => DefaultButton)
  .add('Colored Button', () => ButtonWithColor)
  .add('Small Button', () => ButtonSmall)
  .add('Large Button', () => ButtonLarge)
  .add('Toggle Button', () => ToggleSVG)

coreStories('Card', module)
  .add('Card', () => DefaultCard)

coreStories('Carousel', module)
  .add('Carousel', () => DefaultCarousel)
  .add('Pagination on Page 1 ', () => CarouselPaginationNext)
  .add('Pagination on Page 2', () => CarouselPaginationPrevious)
  .add('Slide Navigation', () => CarouselNavigation)
  .add('Photo Carousel', () => PhotoCarouselExample)

coreStories('Counter', module)
  .add('Counter', () => DefaultCounter)
  .add('Different Step Counter', () => CounterStep)
  .add('Custom Text Counter', () => CounterText)
  .add('Custom Buttons Counter', () => CounterCustomButtons)

coreStories('Dropdown', module)
  .add('Dropdown', () => DefaultDropdown)
  .add('Anchor Props', () => DropdownWithProps)
  .add('Input Anchor without close toggle', () => DropDownInputAnchor)
  .add('Multiple Children', () => DropdownWithMenu)
  .add('Dynamic button text closes on option selection ', () => DropdownCloseOnOptionSelect)

coreStories('Form', module)
  .add('Form', () => Form)
  .add('Filter Panel Modal', () => FilterPanel)

coreStories('Field', module)
  .add('Field', () => DefaultField)
  .add('Select Field', () => SelectField)
  .add('Checkbox Field', () => CheckboxField)

coreStories('Highlighter', module)
  .add('Default Highlighter', () => DefaultHighlighter)
  .add('Highlighter with index', HighlighterWithIndex)

coreStories('Layout', module)
  .add('Grid', () => Grid)
  .add('Responsive Template', () => ResponsiveTemplate)

coreStories('Lead', module)
  .add('LeadForm', () => DefaultLeadForm)
  .add('LeadModal', () => DefaultLeadModal)

coreStories('List', module)
  .add('List', () => DefaultList)
  .add('Horizontal List', () => HorizontalList)
  .add('Custom Node Type List', () => ListWithPassedNodeTypes)
  .add('Custom ListItem List', () => ListWithOwnItemComponent)

coreStories('ListingCell', module)
  .add('Default', () => DefaultListingCell)
  .add('Themed', () => ThemedListingCell)

coreStories('Mapbox', module)
  .add('Mapbox', () => MapPage)

coreStories('Menu', module)
  .add('Menu', () => DefaultMenu)
  .add('On Keyboard Selection', () => MenuOnSelection)
  .add('On Selection hover', () => MenuOnSelectionHover)

coreStories('Modal', module)
  .add('Modal', () => DefaultModal)
  .add('Modal With Close Button', () => CloseModal)
  .add('Modal No Close on Overlay', () => ModalNoOverlayClose)
  .add('Modal Open By Click', ModalPopup)

coreStories('RadioGroup', module)
  .add('Radiogroup', () => DefaultRadioGroup)
  .add('Vertical Radiogroup as Buttons', () => ButtonRadioGroup)
  .add('Vertical Radiogroup', () => VerticalRadioGroup)
  .add('Image Buttons in RadioGroup', () => ImageButtonsRadioGroup)

coreStories('RangeSlider', module)
  .add('RangeSlider', () => DefaultRangeSlider)
  .add('Labeled', () => RangeSliderLabel)
  .add('Min / Max and Step', () => MinMaxStepRangeSlider)
  .add('Square Foot Slider', () => SquareFootSlider)
  .add('Price Slider', () => PriceSlider)

coreStories('RatingBar', module)
  .add('RatingBar', () => DefaultRatingBar)
  .add('Square Rating Bar', () => SquareRatingBar)
  .add('Circle Rating Bar', () => CircleRatingBar)
  .add('Labeled Rating Bar', () => LabeledRatingBar)
  .add('Max Score of 10 Bar', () => MaxScoreTenRatingBar)
  .add('Partial Rating Bar', () => PartialRatingBar)
  .add('Color Filled Bar', () => ColorFilledRatingBar)
  .add('Two Color Rating Bar', () => TwoColoredRatingBar)

coreStories('Text', module)
  .add('Text', () => Text)

coreStories('Title', module)
  .add('Title', () => DefaultTitle)
  .add('Link Title', () => EmbeddedLinkWithinTitle)
