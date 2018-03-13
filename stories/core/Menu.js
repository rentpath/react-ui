import React from 'react'
import { action } from '@storybook/addon-actions'
import { Menu, DropdownMenu } from 'react-ui-core/src'

const options = [
  {
    label: 'Best Match',
    value: 'best-match',
  },
  {
    label: 'Price (Highest to Lowest)',
    value: 'price-desc',
  },
  {
    label: 'Price (Lowest to Highest)',
    value: 'price-asc',
  },
  {
    label: 'Distance (Nearest First)',
    value: 'distance',
  },
  {
    label: 'Rating (High to Low)',
    value: 'rating',
  },
]

export const DefaultMenu = (
  <Menu
    options={[1, 2, 3]}
  />
)

export const MenuOnSelection = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
    onItemSelect={action('selected')}
  />
)

export const MenuOnSelectionHover = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
    onItemMouseOver={action('hovering')}
    nodeType="section"
  />
)

export const MenuWithLabel = (
  <Menu
    options={['Option1', { label: 'Unclickable Label' }, 'Option3', { label: 'Unclickable Label 2' }]}
    onItemSelect={action('selected')}
    nodeType="section"
  />
)

export const DefaultDropdownMenu = (
  <DropdownMenu
    options={options}
    selectedValue="price-asc"
    onItemSelect={(item, index) => action('item select')(`${item.value}, ${index}`)}
  />
)
