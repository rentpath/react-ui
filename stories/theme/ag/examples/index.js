import { compose } from 'react-themed'
import { FilterCard } from './Filters'
import Card from './Card.css'
import Banner from './Banner.css'
import { ToggleDropDown } from './ToggleDropDown'

export default compose({},
  Card,
  FilterCard,
  Banner,
  ToggleDropDown,
)
