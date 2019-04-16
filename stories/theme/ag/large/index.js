import { compose } from '@rentpath/react-themed'
import { ApplyButton, CancelButton } from './Buttons'
import Card from './Card.css'
import RadioButton from './RadioButton.css'
import RadioGroup from './RadioGroup.css'
import {
  DesktopMapPinListing,
  Listing,
  DesktopListing,
} from './Listings'
import {
  RadioButton as RadioButtonBase,
  RadioGroup as RadioGroupBase,
  ApplyButton as ApplyButtonBase,
  CancelButton as CancelButtonBase,
  FilterCard as FilterCardBase,
  Card as CardBase,
  Modal as ModalBase,
  Gmap as GmapBase,
} from '../base'
import {
  FilterCard,
  PetFilterCard,
  BathroomFilterCard,
  PriceFilterCard,
  FilterDropdown,
} from './Filters'
import { GridViewHeader } from './GridView'
import Banner from './Banner.css'

export default compose(
  {},
  ApplyButtonBase,
  ApplyButton,
  CancelButtonBase,
  GmapBase,
  ModalBase,
  CancelButton,
  CardBase,
  Card,
  FilterCardBase,
  FilterCard,
  PetFilterCard,
  PriceFilterCard,
  BathroomFilterCard,
  FilterDropdown,
  RadioButtonBase,
  RadioButton,
  RadioGroupBase,
  RadioGroup,
  DesktopMapPinListing,
  Listing,
  DesktopListing,
  Banner,
  GridViewHeader,
)
