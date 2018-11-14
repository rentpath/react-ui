import FilterPanel from './FilterPanel'
import Form from './Form'
import {
  DefaultRangeSlider,
  RangeSliderLabel,
  MinMaxStepRangeSlider,
  SquareFootSlider,
  PriceSlider,
} from './RangeSlider'
import Text from './Text'
import {
  DefaultDatePicker,
  DatePickerReadOnly,
  DatePickerCustomFormat,
} from './DatePicker'

import {
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  ToggleSVG,
} from './Button'

import {
  DefaultField,
  SelectField,
  CheckboxField,
  MaskedField,
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
  CircleRatingBar,
  LabeledRatingBar,
  MaxScoreTenRatingBar,
  PartialRatingBar,
  HandleRatingClick,
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
  UnselectRadioGroup,
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
  DefaultDropdownMenu,
  MenuWithLabel,
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

import {
  DefaultListingCell,
  ThemedListingCell,
} from './ListingCell'

import { DefaultDrawer } from './Drawer'

import {
  DefaultGmap,
  GmapWithSpinner,
  GmapWithSingleMarker,
  GmapWithMultipleMarkers,
  GmapWithStyles,
  GmapWithInfoWindow,
  GmapWithOverlayView,
  FreeDrawDefault,
  WithExistingShape,
  WithMultipleShapes,
} from './Gmap'

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

import {
  DefaultPhoto,
  PhotoWithFallback,
  PhotoWithSrcSet,
  DefaultBackgroundPhoto,
  BackgroundPhotoWithFallback,
} from './Photo'

import coreStories, { coreStoriesNoContainer } from './coreStories'

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

coreStories('Filters / RadioGroupFilterCard / small', module)
  .add('Bedroom', () => InlineBedroomFilterCard)
  .add('Bathroom', () => InlineBathroomFilterCard)
  .add('Pet', () => InlinePetFilterCard)
  .add('Rating', () => InlineRatingFilterCard)

coreStories('Filters / FilterCard', module)
  .add('Default', () => DefaultFilterCard)
  .add('One Button FilterCard', () => OneButtonFilterCard)
  .add('Two Button FilterCard', () => TwoButtonFilterCard)

coreStories('Filters / RadioGroupFilterCard / large', module)
  .add('Bedroom', () => DesktopBedroomFilterCard)
  .add('Bathroom', () => DesktopBathroomFilterCard)
  .add('Pet', () => DesktopPetFilterCard)

coreStories('Filters / PriceFilterCard / large', module)
  .add('Price Filter', () => DesktopPriceFilterCard)

coreStories('Filters / PriceFilterCard / small', module)
  .add('Price Filter', () => InlinePriceFilterCard)

coreStories('Form', module)
  .add('Form', () => Form)
  .add('Filter Panel Modal', () => FilterPanel)

coreStories('Field', module)
  .add('Field', () => DefaultField)
  .add('Select Field', () => SelectField)
  .add('Checkbox Field', () => CheckboxField)
  .add('Masked field (phone number)', () => MaskedField)

coreStoriesNoContainer('Gmap ', module)
  .add('Gmap', () => DefaultGmap)
  .add('Gmap with spinner', () => GmapWithSpinner)
  .add('Gmap with marker', () => GmapWithSingleMarker)
  .add('Gmap with multiple markers', () => GmapWithMultipleMarkers)
  .add('Gmap with custom styles', () => GmapWithStyles)
  .add('Gmap with infowindow', () => GmapWithInfoWindow)
  .add('Gmap with overlay view', () => GmapWithOverlayView)

coreStoriesNoContainer('Gmap / FreeDraw', module)
  .add('With Defaults', () => FreeDrawDefault)
  .add('With Existing Shape', () => WithExistingShape)
  .add('With Multiple Shapes', () => WithMultipleShapes)

coreStories('Highlighter', module)
  .add('Default Highlighter', () => DefaultHighlighter)
  .add('Highlighter with index', HighlighterWithIndex)

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

coreStories('Menu', module)
  .add('Menu', () => DefaultMenu)
  .add('On Keyboard Selection', () => MenuOnSelection)
  .add('On Selection hover', () => MenuOnSelectionHover)
  .add('DropdownMenu', () => DefaultDropdownMenu)
  .add('Menu with Disabled options', () => MenuWithLabel)

coreStories('Modal', module)
  .add('Modal', () => DefaultModal)
  .add('Modal With Close Button', CloseModal)
  .add('Modal No Close on Overlay', () => ModalNoOverlayClose)
  .add('Modal Open By Click', ModalPopup)

coreStories('Photo', module)
  .add('Photo', () => DefaultPhoto)
  .add('Photo with fallback', () => PhotoWithFallback)
  .add('Photo with picture/srcset', () => PhotoWithSrcSet)
  .add('Background photo', () => DefaultBackgroundPhoto)
  .add('Background photo with fallback', () => BackgroundPhotoWithFallback)

coreStories('RadioGroup', module)
  .add('Radiogroup', () => DefaultRadioGroup)
  .add('Vertical Radiogroup as Buttons', () => ButtonRadioGroup)
  .add('Vertical Radiogroup', () => VerticalRadioGroup)
  .add('Unselect Radiogroup', () => UnselectRadioGroup)
  .add('Image Buttons in RadioGroup', () => ImageButtonsRadioGroup)

coreStories('RangeSlider', module)
  .add('RangeSlider', () => DefaultRangeSlider)
  .add('Labeled', () => RangeSliderLabel)
  .add('Min / Max and Step', () => MinMaxStepRangeSlider)
  .add('Square Foot Slider', () => SquareFootSlider)
  .add('Price Slider', () => PriceSlider)

coreStories('RatingBar', module)
  .add('RatingBar', () => DefaultRatingBar)
  .add('Circle Rating Bar', () => CircleRatingBar)
  .add('Labeled Rating Bar', () => LabeledRatingBar)
  .add('Max Score of 10 Bar', () => MaxScoreTenRatingBar)
  .add('Partial Rating Bar', () => PartialRatingBar)
  .add('onClick for Rating Vote', () => HandleRatingClick)

coreStories('Text', module)
  .add('Text', () => Text)

coreStories('DatePicker', module)
  .add('Default DatePicker', () => DefaultDatePicker)
  .add('Read only', () => DatePickerReadOnly)
  .add('Custom date format', () => DatePickerCustomFormat)

coreStories('Title', module)
  .add('Title', () => DefaultTitle)
  .add('Link Title', () => EmbeddedLinkWithinTitle)

coreStories('Drawers / Drawer', module)
  .add('Default Drawer', () => DefaultDrawer)
