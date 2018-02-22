import React from 'react'
import { action } from '@storybook/addon-actions'
import { Menu, DropdownMenu } from 'react-ui-core/src'

const options = [
  'Best Match',
  'Price (Highest to Lowest)',
  'Price (Lowest to Highest)',
  'Distance (Nearest First)',
  'Rating (High to Low)',
]

export const DefaultMenu = (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
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

export const DefaultDropdownMenu = (
  <DropdownMenu
    options={options}
    onItemSelect={(item, index) => action('item select')(`${item}, ${index}`)}
  />
)
