import { compose } from 'react-themed'
import {
  FilterCard,
  PetFilterCard,
  RatingFilterCard,
} from './Filters'
import { ApplyButton } from './Buttons'
import Card from './Card.css'
import RadioButton from './RadioButton.css'
import RadioGroup from './RadioGroup.css'
import {
  RadioButton as RadioButtonBase,
  RadioGroup as RadioGroupBase,
  ApplyButton as ApplyButtonBase,
  FilterCard as FilterCardBase,
  Card as CardBase,
} from '../base'

export default compose({},
  ApplyButtonBase,
  ApplyButton,
  CardBase,
  Card,
  PetFilterCard,
  RatingFilterCard,
  FilterCardBase,
  FilterCard,
  RadioButtonBase,
  RadioButton,
  RadioGroup,
  RadioGroupBase,
)
